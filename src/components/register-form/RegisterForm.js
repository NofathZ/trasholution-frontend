import { useContext, useState, useEffect } from "react"
import InputForm from "../input-form/InputForm"
import { InputRadio } from "../input-form/InputRadio"
import { ButtonValid } from "../button/ButtonValid"
import API from "../../api/api.js"
import { Redirect } from "react-router"
import { RegisterContext } from "../../context/AllContext"

const RegisterForm = () => {

  const [nama, setNama] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [phone, setPhone] = useState(0)
  const [regisAs, setRegisAs] = useState("")
  const [statusRedirect, setStatusRedirect] = useState(false)

  const { userData, setUserData } = useContext(RegisterContext)

  const handleInput = async (e) => {
    e.preventDefault()
    try {
      const postData = {
        nama,
        email,
        phone,
        password,
        regisAs
      }

      if (nama.length <= 100 && password.length >= 8) {
        const otpSendTo = "+62" + phone.substring(1)
        await API.get(`/api/send-otp/${otpSendTo}`)
  
        setUserData(postData)
        setStatusRedirect(true)
      }
      else {
        alert("Panjang maksimal nama adalah 100 karakter dan panjang password minimal 8 karakter")
      }  
    }
    catch (err) {
      console.error(err)
    }
  }

  return (
    <>
      <h5 className="lead-five secondary-color" style={{ textAlign: "center" }}>Register</h5>
      <form onSubmit={handleInput}>
        <InputForm required={true} placeholder="Nama" type="text" margin="0 0 0 44px" onChange={val => setNama(val)}></InputForm>
        <InputForm required={true} placeholder="Email" type="email" margin="0 0 0 44px" onChange={val => setEmail(val)}></InputForm>
        <InputForm required={true} placeholder="Kata Sandi" type="password" margin="0 0 0 44px" onChange={val => setPassword(val)}></InputForm>
        <InputForm required={true} placeholder="Nomor Telepon" type="number" margin="0 0 0 44px" onChange={val => setPhone(val)}></InputForm>

        <h5 className="lead-five secondary-color" style={{ textAlign: "center", margin: "27px 0 20px 0" }}>Daftar Sebagai</h5>

        <div className="input-radio-wrapper" onChange={event => setRegisAs(event.target.value)}>
          <InputRadio>
            <input
              className="input-radio"
              type="radio"
              id="pengguna"
              name="regis-as"
              value="pengguna"
              required
            />
            <label
              className="lead-five label-radio secondary-color"
              for="pengguna"
            >
              Pengguna
            </label>
          </InputRadio>
          <InputRadio>
            <input
              className="input-radio"
              type="radio"
              id="trashpicker"
              name="regis-as"
              value="trashpicker"
              required
            />
            <label
              className="lead-five label-radio secondary-color"
              for="trashpicker"
            >
              Trashpicker
            </label>
          </InputRadio>
        </div>

        <ButtonValid className="heading-five" style={{ marginTop: "20px" }}>Register</ButtonValid>
        {statusRedirect ? <Redirect to={'/verifikasi'} /> : ""}
      </form>
    </>
  )
}

export default RegisterForm