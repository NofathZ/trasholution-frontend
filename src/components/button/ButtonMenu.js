import "./Button.css"

const ButtonMenu = (props) => {
  return (
    <div className="button-wrapper" onClick={props.onClick}>
      <div className={`button-box ${props.colorStatus}`}>
        {props.children}
      </div>
      <h6 className="lead-six secondary-color">{props.title}</h6>
    </div>
  )
}

export default ButtonMenu