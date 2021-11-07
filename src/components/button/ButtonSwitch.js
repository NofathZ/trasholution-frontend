import './ButtonSwitch.css'

const ButtonSwitch = (props) => {

  function changeStatus(status) {
    props.changeStatus(status)
  }

  return (
    <label className="switch">
      <input type="checkbox" checked={props.status} onClick={() => changeStatus(props.status)} />
      <span className="slider round text-status-active lead-five">
        {props.status ? 'Online' : 'Offline'}
      </span>
    </label>
  )
}

export default ButtonSwitch