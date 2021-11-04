import RequestBox from "../request-menu/RequestBox"
import "./ContentProfilTrashpicker.css"

const ContentProfilTrashpicker = () => {
  return (
    <div className="content-profil-box-trashpicker">
      <h3 className="heading-three main-color" style={{ margin: "0 0 18px 0", textAlign: "center" }}>Selesai</h3>
      <RequestBox type="Request Penjemputan" name="Marlina" style={{ backgroundColor: "#BFBFBF" }}></RequestBox>
      <RequestBox type="Request Penjemputan" name="Marlina" style={{ backgroundColor: "#BFBFBF" }}></RequestBox>
      <RequestBox type="Request Penjemputan" name="Marlina" style={{ backgroundColor: "#BFBFBF" }}></RequestBox>
    </div>
  )
}

export default ContentProfilTrashpicker