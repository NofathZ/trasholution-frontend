import './RequestBox.css'

const RequestBox = (props) => {
  return (
    <div className="request-wrapper main-color-bg" style={props.style}>
      <div>
        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M33.3333 14.5833C33.3333 19.1857 29.6024 22.9167 25 22.9167C20.3976 22.9167 16.6667 19.1857 16.6667 14.5833C16.6667 9.98096 20.3976 6.25 25 6.25C29.6024 6.25 33.3333 9.98096 33.3333 14.5833Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M25 29.1667C16.9459 29.1667 10.4167 35.6958 10.4167 43.75H39.5833C39.5833 35.6958 33.0542 29.1667 25 29.1667Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <div>
        <h6 className="lead-six" style={{ color: "white" }}>{props.type}</h6>
        <h6 className="heading-four" style={{ color: "white" }}>{props.name}</h6>
      </div>
      <div>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14 5L21 12M21 12L14 19M21 12L3 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

      </div>
    </div>
  )
}

export default RequestBox