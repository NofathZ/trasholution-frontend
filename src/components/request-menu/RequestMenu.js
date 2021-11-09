import { Link } from "react-router-dom"
import RequestBox from "./RequestBox"
import "./RequestBox.css"

const RequestMenu = () => {
  return (
    <>
      <h3 className="lead-three main-color" style={{ textAlign: "center" }}>Request</h3>
      <div className="line-break"></div>
      <Link to={'/trashpicker/terima-permintaan'} style={{ textDecoration: "none" }}>
        <RequestBox type="Request Penjemputan" name="Marlina"></RequestBox>
      </Link>
      <Link to={'/trashpicker/terima-permintaan'} style={{ textDecoration: "none" }}>
        <RequestBox type="Request Penjemputan" name="Marlina"></RequestBox>
      </Link>
      <Link to={'/trashpicker/terima-permintaan'} style={{ textDecoration: "none" }}>
        <RequestBox type="Request Penjemputan" name="Marlina"></RequestBox>
      </Link>
    </>
  )
}

export default RequestMenu