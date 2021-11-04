import "./Button.css"

const ButtonMenu = (props) => {
  return (
    <div className="button-wrapper">
      <div className="button-box main-color-bg">
        {props.children}
      </div>
      <h6 className="lead-six secondary-color">{props.title}</h6>
    </div>
  )
}

export default ButtonMenu