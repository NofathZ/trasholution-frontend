import "./InfoTrashpicker.css"
import "../info-pengguna/InfoPengguna.css"
import MapTrashpicker from "../map-trashpicker/MapTrashpicker"

const InfoTrashpicker = () => {
  return (
    <div className="info-pengguna-wrapper">
      <h6 className="lead-six secondary-color" style={{marginTop:"21px"}}>Nama Trashpicker</h6>
      <h4 className="heading-four secondary-color" style={{marginTop:"3px"}}>Marlina</h4>
      <h6 className="lead-six secondary-color" style={{marginTop:"12px"}}>No. Trashpicker</h6>
      <h4 className="heading-four secondary-color" style={{marginTop:"3px"}}>08169696969</h4>
      <h6 className="lead-six secondary-color" style={{marginTop:"15px", marginBottom:"10px"}}>Detail map</h6>
      <MapTrashpicker />
      <button className="terima-permintaan-btn heading-five">Telepon</button>
    </div>
  )
}

export default InfoTrashpicker