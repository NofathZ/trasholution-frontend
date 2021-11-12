import './InputDropdown.css'

const InputDropdown = (props) => {
  return (
    <div >
      <select className="money-tipe" style={{ color: "white" }}>
        {props.dropdownVal.map((item, idx) => (
          <option value={item} key={idx}>{item}</option>
        ))}
      </select>
    </div>
  )
}

export default InputDropdown