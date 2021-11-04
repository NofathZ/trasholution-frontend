import InputForm from "../input-form/InputForm"
import InputDropdown from "../input-form/InputDropdown"
import "./Withdraw.css"

const Withdraw = () => {
  const dropdownVal = [
    "Ovo", "Gopay"
  ]

  return (
    <div className="withdraw-box main-color-bg">
      <div style={{ paddingTop: "43px" }}>
        <h6 className="lead-six label-title" style={{ color: "white" }}>Nominal</h6>
        <InputForm name="nominal" type="number" />
      </div>
      <div style={{ paddingTop: "24px" }}>
        <h6 className="lead-six label-title" style={{ color: "white" }}>Jenis Uang Elektronik</h6>
        <InputDropdown dropdownVal={dropdownVal} />
      </div>
      <div style={{ paddingTop: "24px" }}>
        <h6 className="lead-six label-title" style={{ color: "white" }}>Nomor Telepon</h6>
        <InputForm name="nominal" />
      </div>
    </div>
  )
}

export default Withdraw