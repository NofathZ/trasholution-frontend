import { useState } from "react";
import InputForm from "../input-form/InputForm";
import { InputRadio } from "../input-form/InputRadio";
import { ButtonValid } from "../button/ButtonValid";
import API from "../../api/api.js"
import { Link, Redirect } from "react-router-dom";
import "./LoginForm.css";

const LoginForm = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loginAs, setLoginAs] = useState("")
  const [inputAllData, setInputAllData] = useState(false)

  const handleInput = async (e) => {
    e.preventDefault();
    try {
      const postData = {
        email,
        password
      }

      if (loginAs == "pengguna") {
        const { data } = await API.post('/api/p/login', postData, {
          headers: {
            'Content-Type': "application/json"
          }
        })
        if (data.data) {
          localStorage.setItem("token", data.data.access_token);
        }
      }
      else if (loginAs == "trashpicker") {
        const { data } = await API.post('/api/t/login', postData, {
          headers: {
            'Content-Type': "application/json"
          }
        })
        if (data.data) {
          localStorage.setItem("token", data.data.access_token);
        }
      }

      setInputAllData(true)
      console.log("masuk")
    }
    catch (err) {
      console.error(err)
    }
  }

  return (
    <form onSubmit={handleInput}>
      <InputForm placeholder="Email" type="email" required={true} onChange={val => setEmail(val)}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 8L10.8906 13.2604C11.5624 13.7083 12.4376 13.7083 13.1094 13.2604L21 8M5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19Z"
            stroke="#50CB93"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </InputForm>
      <InputForm placeholder="Password" type="password" required={true} onChange={val => setPassword(val)}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16 11V12H17V11H16ZM8 11H7V12H8V11ZM13 15C13 14.4477 12.5523 14 12 14C11.4477 14 11 14.4477 11 15H13ZM11 17C11 17.5523 11.4477 18 12 18C12.5523 18 13 17.5523 13 17H11ZM6 12H18V10H6V12ZM19 13V19H21V13H19ZM18 20H6V22H18V20ZM5 19V13H3V19H5ZM6 20C5.44772 20 5 19.5523 5 19H3C3 20.6569 4.34315 22 6 22V20ZM19 19C19 19.5523 18.5523 20 18 20V22C19.6569 22 21 20.6569 21 19H19ZM18 12C18.5523 12 19 12.4477 19 13H21C21 11.3431 19.6569 10 18 10V12ZM6 10C4.34315 10 3 11.3431 3 13H5C5 12.4477 5.44772 12 6 12V10ZM15 7V11H17V7H15ZM16 10H8V12H16V10ZM9 11V7H7V11H9ZM12 4C13.6569 4 15 5.34315 15 7H17C17 4.23858 14.7614 2 12 2V4ZM12 2C9.23858 2 7 4.23858 7 7H9C9 5.34315 10.3431 4 12 4V2ZM11 15V17H13V15H11Z"
            fill="#50CB93"
          />
        </svg>
      </InputForm>
      <h5
        className="lead-five secondary-color"
        style={{
          textAlign: "center",
          marginTop: "15px",
          marginBottom: "30px",
        }}
      >
        Login Sebagai
      </h5>

      <div className="input-radio-wrapper" onChange={event => setLoginAs(event.target.value)}>
        <InputRadio>
          <input
            className="input-radio"
            type="radio"
            id="pengguna"
            name="login-as"
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
            name="login-as"
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

      <ButtonValid className="heading-five" style={{ marginTop: "20px" }}>Log In</ButtonValid>
      <div className="register-redirect">
        <span className="secondary-color lead-eight">Belum daftar? </span>
        <Link to={"/register"} style={{ textDecoration: "none" }}>
          <span className="main-color heading-eight to-register">Daftar disini</span>
        </Link>
      </div>
      {inputAllData ? <Redirect to={'/'}></Redirect> : ""}
    </form>
  );
};

export default LoginForm;
