import { Link } from "react-router-dom"
import MapTrashpickerDijalan from "../map-trashpicker-dijalan/MapTrashpickerDijalan"
import API from "../../api/api"
import { useState, useEffect } from "react"

const InfoTrashpickerDijalan = (props) => {

  const token = localStorage.getItem('token')
  const [lokasiPengguna, setLokasiPengguna] = useState("")

  useEffect(async () => {
    if (props.detailInformasiPermintaan && props.detailInformasiPermintaan.pengguna) {
      const lokasi = {
        lat: props.detailInformasiPermintaan.pengguna.lat,
        long: props.detailInformasiPermintaan.pengguna.long
      }
      const infoLokasi = await API.post('/api/lokasi', lokasi)
      setLokasiPengguna(infoLokasi.data.data.label)
    }
  }, [props.detailInformasiPermintaan, props.detailInformasiPermintaan.pengguna])

  const sudahSampai = async () => {
    await API.get(`/api/t/daftar-permintaan/${props.id}/tiba`, {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    })

    await props.coba()
  }

  return (
    <div className="info-pengguna-wrapper">
      {
        props.detailInformasiPermintaan && props.detailInformasiPermintaan.penjualan && <MapTrashpickerDijalan dataLokasi={props.detailInformasiPermintaan.penjualan}  />
      }
      <h6 className="lead-six secondary-color" style={{ marginTop: "21px" }}>Nama Pengguna</h6>
      <h4 className="heading-four secondary-color" style={{ marginTop: "3px" }}>{props.detailInformasiPermintaan.pengguna && props.detailInformasiPermintaan.pengguna.nama}</h4>
      <h6 className="lead-six secondary-color" style={{ marginTop: "12px" }}>Alamat Pengguna</h6>
      <h4 className="heading-four secondary-color" style={{ marginTop: "3px" }}>{lokasiPengguna}</h4>
      <Link to={`/trashpicker/detail-validasi/${props.id}`} style={{ textDecoration: "none" }}>
        <button className="terima-permintaan-btn heading-five" onClick={sudahSampai}>Sudah Sampai</button>
      </Link>
    </div>
  )
}

export default InfoTrashpickerDijalan