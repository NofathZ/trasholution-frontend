import './HeadingTitle.css'

const HeadingTitle = (props) => {
  return (
    <div className="heading-wrapper">
      <div className="heading-icon">
        {props.children[0]}
      </div>
      <div className="heading-name">
        {props.children[1]}
      </div>
    </div>
  )
}

export default HeadingTitle