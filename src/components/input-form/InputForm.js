import "./InputForm.css";

const InputForm = (props) => {
  
  const handleInput = (val) => {
    props.onChange(val)
  }

  return (
    <div className="input-box lead-five">
      {props.children}
      <input className="input-column" required={props.required} type={props.type || "text"} placeholder={props.placeholder} style={{margin: props.margin}} onChange={(event) => handleInput(event.target.value)} />
    </div>
  )
}

export default InputForm