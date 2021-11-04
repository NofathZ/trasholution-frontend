import InputForm from "../input-form/InputForm"
import { InputRadio } from "../input-form/InputRadio"
import { ButtonValid } from "../button/ButtonValid"

const RegisterForm = () => {
  return (
    <>
      <h5 className="lead-five secondary-color" style={{ textAlign: "center" }}>Register</h5>
      <InputForm placeholder="Nama" margin="0 0 0 44px"></InputForm>
      <InputForm placeholder="Email" margin="0 0 0 44px"></InputForm>
      <InputForm placeholder="Kata Sandi" margin="0 0 0 44px"></InputForm>
      <InputForm placeholder="Nomor Telepon" margin="0 0 0 44px"></InputForm>

      <h5 className="lead-five secondary-color" style={{ textAlign: "center", margin: "27px 0 20px 0" }}>Daftar Sebagai</h5>

      <div className="input-radio-wrapper">
        <InputRadio>
          <input
            className="input-radio"
            type="radio"
            id="pengguna"
            name="login-as"
            value="pengguna"
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
            name="login-as"
            value="trashpicker"
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
    </>
  )
}

export default RegisterForm