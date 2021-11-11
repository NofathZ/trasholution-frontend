import './ButtonSwitch.css'

const ButtonSwitch = (props) => {

  function changeStatus() {
    props.changeStatus()
    // console.log('status changed')
  }

  return (
    <label className="switch">
      <input type="checkbox" checked={props.status} onClick={() => changeStatus()} />
      <span className="slider round text-status-active lead-five">
        {props.status ? 'Online' : 'Offline'}
      </span>
    </label>
  )
}

export default ButtonSwitch