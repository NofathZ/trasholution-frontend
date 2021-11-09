import { useState } from 'react'
import { Redirect } from 'react-router'
import { ButtonValid } from '../button/ButtonValid'
import './InputForm.css'

const InputVerif = () => {

  const [number1, setNumber1] = useState(null)
  const [number2, setNumber2] = useState(null)
  const [number3, setNumber3] = useState(null)
  const [number4, setNumber4] = useState(null)
  const [statusRedirect, setStatusRedirect] = useState(false)

  const handleInput = (e) => {
    e.preventDefault()
    try {
      console.log("Buat logicnya")
      setStatusRedirect(true)
    }
    catch(err) {
      console.error(err)
    }
  }

  const resendOTP = () => {
    console.log("Resend")
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

      {statusRedirect ? <Redirect to={"/"} /> : ""}
    </form>
  )
}

export default InputVerif