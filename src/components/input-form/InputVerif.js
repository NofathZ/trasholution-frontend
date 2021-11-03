import './InputForm.css'

const InputVerif = () => {

  return (
    <div className="input-verif-wrapper">
      <input type="number" className="input-number-verification" min="0" max="9"></input>
      <input type="number" className="input-number-verification" min="0" max="9"></input>
      <input type="number" className="input-number-verification" min="0" max="9"></input>
      <input type="number" className="input-number-verification" min="0" max="9"></input>
    </div>
  )
}

export default InputVerif