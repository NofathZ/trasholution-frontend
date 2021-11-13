import "./InfoTrashpicker.css"
import "../info-pengguna/InfoPengguna.css"
import MapTrashpicker from "../map-trashpicker/MapTrashpicker"
import { useEffect } from "react"
// lokasiTrashpicker={[props.dataPenjualan.data.trashpicker.lat, props.dataPenjualan.data.trashpicker.long]}
const InfoTrashpicker = (props) => {
  return (
    <div className="info-pengguna-wrapper">
      <h6 className="lead-six secondary-color" style={{ marginTop: "21px" }}>Nama Trashpicker</h6>
      <h4 className="heading-four secondary-color" style={{ marginTop: "3px" }}>{props.dataPenjualan.data && props.dataPenjualan.data.trashpicker && props.dataPenjualan.data.trashpicker.nama}</h4>
      <h6 className="lead-six secondary-color" style={{ marginTop: "12px" }}>No. Trashpicker</h6>
      <h4 className="heading-four secondary-color" style={{ marginTop: "3px" }}>{props.dataPenjualan.data && props.dataPenjualan.data.trashpicker && props.dataPenjualan.data.trashpicker.phone}</h4>
      <h6 className="lead-six secondary-color" style={{ marginTop: "15px", marginBottom: "10px" }}>Detail map</h6>
      {
        props.dataPenjualan.data && props.dataPenjualan.data.trashpicker && props.dataPenjualan.data.trashpicker.lat && props.dataPenjualan.data.trashpicker.long && <MapTrashpicker dataLokasi={props.dataPenjualan.data.penjualan}  />
      }
      <button className="terima-permintaan-btn heading-five">Telepon</button>
    </div>
  )
}

export default InfoTrashpicker