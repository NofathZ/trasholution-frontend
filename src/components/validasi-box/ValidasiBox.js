import './ValidasiBox.css'

const ValidasiBox = (props) => {

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
        {props.tipeKolom.map((type, idx) => (
          <span className="heading-seven list-item-validasi" key={idx}>{type}</span>
        ))}
      </div>

      {props.daftarSampah.map((sampah, idx) => (
        <div className="row-box" key={idx}>
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