import { useState, useContext, useEffect } from 'react'
import { Redirect, useHistory } from 'react-router'
import { ButtonValid } from '../button/ButtonValid'
import { RegisterContext } from '../../context/AllContext'
import API from '../../api/api'
import './InputForm.css'

const InputVerif = () => {

  const [number1, setNumber1] = useState(null)
  const [number2, setNumber2] = useState(null)
  const [number3, setNumber3] = useState(null)
  const [number4, setNumber4] = useState(null)
  const { userData, setUserData } = useContext(RegisterContext)
  const history = useHistory()

  const handleInput = async (e) => {
    e.preventDefault()
    try {
      const { nama, email, phone, password, regisAs } = userData
      const otpSendTo = "+62" + phone.substring(1)
      const otp = `${number1 + number2 + number3 + number4}`
      const userDataReady = { nama, email, phone: otpSendTo, password, otp }

      // Register
      if (regisAs == "pengguna") {
        const resultReg = await API.post('/api/p/register', userDataReady, {
          headers: {
            'Content-Type': "application/json"
          }
        }).catch((err) => {
          if (err.response) {
            alert(err.response.data.message)
          }
        })
        if (resultReg.data.success) {
          alert("Akun Anda Telah Terdaftar")
          history.push('/login')
        }
      }
      else if (regisAs == "trashpicker") {
        const resultReg = await API.post('/api/t/register', userDataReady, {
          headers: {
            'Content-Type': "application/json"
          }
        }).catch((err) => {
          if (err.response) {
            alert(err.response.data.message)
          }
        })
        if (resultReg.data.success) {
          alert("Akun Anda Telah Terdaftar")
          history.push('/login')
        }
      }
    }
    catch (err) {
      console.error(err)
    }
  }

  const resendOTP = async () => {
    const { phone } = userData
    const otpSendTo = "+62" + phone.substring(1)
    await API.get(`/api/send-otp/${otpSendTo}`)
    handleInput()
  }

  return (
    <form onSubmit={handleInput}>
      <div className="input-verif-wrapper" >
        <input type="number" className="input-number-verification" min="0" max="9" onChange={(e) => setNumber1(e.target.value)}></input>
        <input type="number" className="input-number-verification" min="0" max="9" onChange={(e) => setNumber2(e.target.value)}></input>
        <input type="number" className="input-number-verification" min="0" max="9" onChange={(e) => setNumber3(e.target.value)}></input>
        <input type="number" className="input-number-verification" min="0" max="9" onChange={(e) => setNumber4(e.target.value)}></input>
      </div>

      <div className="lead-five" style={{ textAlign: "center", marginTop: "78px" }}>
        <span className="secondary-color">Tidak menerima OTP? </span>
        <span style={{ color: "#35BE80", cursor: "pointer" }} onClick={resendOTP}>Resend</span>
      </div>

      <ButtonValid className="heading-five" style={{ marginTop: "20px" }}>Kirim</ButtonValid>

      {/* {statusRedirect ? <Redirect to={"/"} /> : ""} */}
    </form>
  )
}

export default InputVerif