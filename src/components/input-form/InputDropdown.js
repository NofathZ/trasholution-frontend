import './InputDropdown.css'

const InputDropdown = (props) => {
  return (
    <div >
      <select className="money-tipe" style={{ color: "white" }}>
        {props.dropdownVal.map(item => (
          <option value={item}>{item}</option>
        ))}
      </select>
    </div>
  )
}

export default InputDropdown