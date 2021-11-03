import "./InputForm.css";

const InputForm = (props) => {
  return (
    <div className="input-box lead-five">
      {props.children}
      <input className="input-column" placeholder={props.placeholder} style={{margin: props.margin}} />
    </div>
  )
}

export default InputForm