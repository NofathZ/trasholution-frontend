import DaftarSampahPermintaan from '../daftar-sampah-permintaan/DaftarSampahPermintaan'
import MapPengguna from '../map-pengguna/MapPengguna'
import { Link } from 'react-router-dom'
import "./InfoPengguna.css"
import { useEffect, useState } from 'react'
import API from '../../api/api'

const InfoPengguna = (props) => {

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

  const terimaPermintaan = async () => {
    await API.get(`api/t/daftar-permintaan/${props.id}/tunggu`, {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    })
  }

  return (
    <div className="info-pengguna-wrapper">
      <h6 className="lead-six secondary-color" style={{ marginTop: "21px" }}>Nama Pengguna</h6>
      <h4 className="heading-four secondary-color" style={{ marginTop: "3px" }}>{props.detailInformasiPermintaan.pengguna && props.detailInformasiPermintaan.pengguna.nama}</h4>
      <h6 className="lead-six secondary-color" style={{ marginTop: "12px" }}>Alamat Pengguna</h6>
      <h4 className="heading-four secondary-color" style={{ marginTop: "3px" }}>{lokasiPengguna}</h4>
      <h6 className="lead-six secondary-color" style={{ marginTop: "15px", marginBottom: "10px" }}>Detail map</h6>
      <MapPengguna informasiPengguna={props.detailInformasiPermintaan.pengguna} />
      <h6 className="lead-six secondary-color" style={{ margin: "9px 0" }}>Detail Sampah</h6>
      <DaftarSampahPermintaan daftarSampahPengguna={props.detailInformasiPermintaan.daftar_sampah} />
      <Link to={`/trashpicker/terima-permintaan/${props.id}/dijalan`} style={{ textDecoration: "none" }}>
        <button className="terima-permintaan-btn heading-five" onClick={terimaPermintaan}>Terima Permintaan</button>
      </Link>
    </div>
  )
}

export default InfoPengguna