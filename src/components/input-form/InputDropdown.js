import './InputDropdown.css'

const InputDropdown = (props) => {

  function setTipe(val) {
    props.onChange(val)
  }

  return (
    <select className="money-tipe" style={{ color: "white" }} onChange={(e) => setTipe(e.target.value)}>
      {props.dropdownVal.map((item, idx) => (
        <option value={item} key={idx}>{item}</option>
      ))}
    </select>
  )
}

export default InputDropdown