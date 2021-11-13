import { Link } from "react-router-dom"
import { useEffect } from "react/cjs/react.development"
import MapTrashpickerDijalan from "../map-trashpicker-dijalan/MapTrashpickerDijalan"
import API from "../../api/api"

const InfoTrashpickerDijalan = (props) => {

  const token = localStorage.getItem('token')

  const sudahSampai = async () => {
    await API.get(`/api/t/daftar-permintaan/${props.id}/tiba`, {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    })
  }

  console.log(props.detailInformasiPermintaan)

  return (
    <div className="info-pengguna-wrapper">
      <MapTrashpickerDijalan informasiMap={props.detailInformasiPermintaan} />
      <h6 className="lead-six secondary-color" style={{ marginTop: "21px" }}>Nama Pengguna</h6>
      <h4 className="heading-four secondary-color" style={{ marginTop: "3px" }}>{props.detailInformasiPermintaan.pengguna && props.detailInformasiPermintaan.pengguna.nama}</h4>
      <h6 className="lead-six secondary-color" style={{ marginTop: "12px" }}>Alamat Pengguna</h6>
      <h4 className="heading-four secondary-color" style={{ marginTop: "3px" }}>{props.detailInformasiPermintaan.pengguna && props.detailInformasiPermintaan.pengguna.email}</h4>
      <Link to={`/trashpicker/detail-validasi/${props.id}`} style={{ textDecoration: "none" }}>
        <button className="terima-permintaan-btn heading-five" onClick={sudahSampai}>Sudah Sampai</button>
      </Link>
    </div>
  )
}

export default InfoTrashpickerDijalan