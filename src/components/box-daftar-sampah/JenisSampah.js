import { useEffect, useState } from "react/cjs/react.development"
import "./BoxDaftarSampah.css"
import api from "../../api/api"

const JenisSampah = (props) => {

  useEffect(async () => {
  }, [props.dataSampah])
  return (
    <>
      <h5 className="jenis-sampah-title heading-five">Jenis Sampah</h5>
      <div className="list-sampah">
        <span className="baris-data lead-eight">No</span>
        <span className="baris-data lead-eight">Nama</span>
        <span className="baris-data lead-eight">Ukuran</span>
        <span className="baris-data lead-eight">Harga</span>
      </div>
      {props.dataSampah.map((data, index) => {
        return (
          <div className="list-sampah">
          <span className="baris-data lead-eight">{index}</span>
          <span className="baris-data lead-eight">{data.nama}</span>
          <span className="baris-data lead-eight">{data.ukuran}</span>
          <span className="baris-data lead-eight">{data.harga}</span>
        </div>
        )
      })}
    </>
  )
}

export default JenisSampah