import { useEffect, useState } from "react"
import "./DaftarSampahPermintaan.css"

const DaftarSampahPermintaan = (props) => {

  const [daftarSampahPengguna, setDaftarSampahPengguna] = useState([])

  useEffect(() => {
    if (props.daftarSampahPengguna) {
      setDaftarSampahPengguna(props.daftarSampahPengguna);
    }
  }, [props.daftarSampahPengguna])

  const totalKuantitas = (daftarSampah) => {
    let totalSampah = 0
    daftarSampah.map(sampah => {
      totalSampah += parseInt(sampah.kuantitas)
    })
    return totalSampah
  }

  return (
    <div className="daftar-permintaan-box main-color-bg">

      {daftarSampahPengguna.map(sampah => {
        return (
          <div className="daftar-row">
            <div className="heading-five column-daftar-sampah">
              {sampah.sampah.jenis}
            </div>
            <div className="heading-five column-daftar-sampah flex-2"></div>
            <div className="heading-five column-daftar-sampah">
              {sampah.kuantitas} buah
            </div>
          </div>
        )
      })}


      <div className="line-break-daftar-sampah" style={{ color: "white" }}></div>

      <div className="daftar-row">
        <div className="heading-five column-daftar-sampah"></div>
        <div className="heading-five column-daftar-sampah flex-2">Total Sampah</div>
        <div className="heading-five column-daftar-sampah">
          {daftarSampahPengguna ? totalKuantitas(daftarSampahPengguna) : ""} buah
        </div>
      </div>
    </div>
  )
}

export default DaftarSampahPermintaan