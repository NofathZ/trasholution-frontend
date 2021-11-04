import RequestBox from "./RequestBox"
import "./RequestBox.css"

const RequestMenu = () => {
  return (
    <>
      <h3 className="lead-three main-color" style={{ textAlign: "center" }}>Request</h3>
      <div className="line-break"></div> 
      <RequestBox type="Request Penjemputan" name="Marlina"></RequestBox>
      <RequestBox type="Request Penjemputan" name="Marlina"></RequestBox>
      <RequestBox type="Request Penjemputan" name="Marlina"></RequestBox>
    </>
  )
}

export default RequestMenu