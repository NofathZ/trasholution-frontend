import { useState } from "react"
import InputForm from "../input-form/InputForm"
import { InputRadio } from "../input-form/InputRadio"
import { ButtonValid } from "../button/ButtonValid"
import API from "../../api/api.js"

const RegisterForm = () => {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [phone, setPhone] = useState(0)
  const [regisAs, setRegisAs] = useState("")


  const handleInput = async (e) => {
    e.preventDefault()
    try {
      const postData = {
        nama: name,
        email,
        phone,
        password
      }
      if (regisAs == "pengguna") {
        await API.post('/api/p/register', postData, {
          headers: {
            'Content-Type': "application/json"
          }
        })
      }
      else if (regisAs == "trashpicker") {
        await API.post('/api/t/register', postData, {
          headers: {
            'Content-Type': "application/json"
          }
        })
      }
    }
    catch(err) {
      console.error(err)
    }
  }

  return (
    <>
      <h5 className="lead-five secondary-color" style={{ textAlign: "center" }}>Register</h5>
      <form onSubmit={handleInput}>
        <InputForm required={true} placeholder="Nama" type="text" margin="0 0 0 44px" onChange={val => setName(val)}></InputForm>
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
      </form>
    </>
  )
}

export default RegisterForm