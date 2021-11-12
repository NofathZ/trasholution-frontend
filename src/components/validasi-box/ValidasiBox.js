import { useEffect } from 'react/cjs/react.development'
import './ValidasiBox.css'

const ValidasiBox = (props) => {
  useEffect(() => {
    console.log(props.daftarSampah)
  })

  const totalKuantitas = (daftarSampah) => {
    let totalSampah = 0
    daftarSampah.map(sampah => {
      totalSampah += parseInt(sampah.kuantitas)
    })
    return totalSampah
  }

  return (
    <div className="validasi-box main-color-bg">
      <div className="row-box">
        {props.tipeKolom.map(type => (
          <span className="heading-seven list-item-validasi">{type}</span>
        ))}
      </div>

      {props.daftarSampah.map(sampah => (
        <div className="row-box">
          <span className="lead-seven list-item-validasi">{sampah.sampah.nama}</span>
          <span className="lead-seven list-item-validasi">{sampah.kuantitas} buah</span>
          <span className="lead-seven list-item-validasi">
            <button className="lihat-btn">Lihat</button>
          </span>
        </div>
      ))}

      <div className="line-break-validasi"></div>

      <div className="row-box">
        <span className="lead-seven list-item-validasi">Jumlah</span>
        <span className="lead-seven list-item-validasi">
          {props.daftarSampah ? totalKuantitas(props.daftarSampah) : ""} buah</span>
        <span className="lead-seven list-item-validasi"></span>
      </div>
    </div>
  )
}

export default ValidasiBox