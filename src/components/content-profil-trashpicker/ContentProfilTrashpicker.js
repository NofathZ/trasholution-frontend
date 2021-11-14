import RequestBox from "../request-menu/RequestBox"
import "./ContentProfilTrashpicker.css"

const ContentProfilTrashpicker = (props) => {
  return (
    <div className="content-profil-box">
      <div>
        <h6 className="lead-six secondary-color">Email</h6>
        <h6 className="heading-six main-color" style={{ paddingLeft: "38px", marginTop: "18px" }}>{props.dataTrashpicker.email}</h6>
        <div className="line-break-profile"></div>
        <h6 className="lead-six secondary-color">Alamat</h6>
        <h6 className="heading-six main-color" style={{ paddingLeft: "38px", marginTop: "18px" }}>{props.lokasi}</h6>
        <div className="line-break-profile"></div>
        <h6 className="lead-six secondary-color">Nomor Telepon</h6>
        <h6 className="heading-six main-color" style={{ paddingLeft: "38px", marginTop: "18px" }}>{props.dataTrashpicker.phone}</h6>
        <div className="line-break-profile"></div>
      </div>
    </div>
  )
}

export default ContentProfilTrashpicker