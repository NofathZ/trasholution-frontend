import DaftarSampahPermintaan from '../daftar-sampah-permintaan/DaftarSampahPermintaan'
import MapPengguna from '../map-pengguna/MapPengguna'
import { Link } from 'react-router-dom'
import "./InfoPengguna.css"
import { useEffect, useState } from 'react'

const InfoPengguna = (props) => {

  // console.log(props.detailInformasiPermintaan)


  return (
    <div className="info-pengguna-wrapper">
      <h6 className="lead-six secondary-color" style={{ marginTop: "21px" }}>Nama Pengguna</h6>
      <h4 className="heading-four secondary-color" style={{ marginTop: "3px" }}>{props.detailInformasiPermintaan.pengguna && props.detailInformasiPermintaan.pengguna.nama}</h4>
      <h6 className="lead-six secondary-color" style={{ marginTop: "12px" }}>Alamat Pengguna</h6>
      <h4 className="heading-four secondary-color" style={{ marginTop: "3px" }}>jl. masfistaosa no.59</h4>
      <h6 className="lead-six secondary-color" style={{ marginTop: "15px", marginBottom: "10px" }}>Detail map</h6>
      <MapPengguna informasiPengguna={props.detailInformasiPermintaan.pengguna} />
      <h6 className="lead-six secondary-color" style={{ margin: "9px 0" }}>Detail Sampah</h6>
      <DaftarSampahPermintaan daftarSampahPengguna={props.detailInformasiPermintaan.daftar_sampah} />
      <Link to={`/trashpicker/terima-permintaan/${props.id}/dijalan`} style={{ textDecoration: "none" }}>
        <button className="terima-permintaan-btn heading-five">Terima Permintaan</button>
      </Link>
    </div>
  )
}

export default InfoPengguna