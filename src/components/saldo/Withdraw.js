import InputForm from "../input-form/InputForm"
import InputDropdown from "../input-form/InputDropdown"
import "./Withdraw.css"
import { useState } from "react"
import API from "../../api/api"
import { useHistory } from "react-router"

const Withdraw = (props) => {
  const dropdownVal = ["OVO", "GOPAY"]
  const token = localStorage.getItem('token')
  const history = useHistory()
  const [nominalPencairan, setNominalPencairan] = useState(0)
  const [moneyType, setMoneyType] = useState(dropdownVal[0])

  const withdraw = async (e) => {
    e.preventDefault()
    try {
      const dataReady = {
        "uang_elektronik": moneyType,
        "nominal": nominalPencairan
      }

      await API.post('/api/p/cairkan-saldo', dataReady, {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      })
      history.push('/')
    }
    catch (err) {
      console.error(err)
    }
  }

  return (
    <form onSubmit={withdraw} className="withdraw-box main-color-bg">
      <div style={{ paddingTop: "43px" }}>
        <h6 className="lead-six label-title" style={{ color: "white" }}>Nominal</h6>
        <InputForm name="nominal" type="number" onChange={(val) => setNominalPencairan(val)} />
      </div>
      <div style={{ paddingTop: "24px" }}>
        <h6 className="lead-six label-title" style={{ color: "white" }}>Jenis Uang Elektronik</h6>
        <InputDropdown dropdownVal={dropdownVal} onChange={val => setMoneyType(val)} />
      </div>
      <div style={{ paddingTop: "24px" }}>
        <h6 className="lead-six label-title" style={{ color: "white" }}>Nomor Telepon</h6>
        {/* <InputForm name="nominal" /> */}
        <h6 className="heading-six label-title" style={{ textAlign: 'left', color: "white" }}>{props.phone}</h6>
      </div>
      <button type="submit" className="withdraw-btn lead-five">Cairkan</button>
    </form>
  )
}

export default Withdraw