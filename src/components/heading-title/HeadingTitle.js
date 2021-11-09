import './HeadingTitle.css'
import { useHistory } from 'react-router'

const HeadingTitle = (props) => {
  let history = useHistory();

  return (
    <div className="heading-wrapper">
      <div className="heading-icon" style={{ cursor: "pointer" }} onClick={() => history.goBack()}>
        {props.children[0]}
      </div>
      <div className="heading-name">
        {props.children[1]}
      </div>
    </div>
  )
}

export default HeadingTitle