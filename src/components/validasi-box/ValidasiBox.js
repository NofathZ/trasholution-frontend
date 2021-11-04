import './ValidasiBox.css'

const ValidasiBox = (props) => {
  return (
    <div className="validasi-box main-color-bg">
      <div className="row-box">
        {props.dataValidasi.type.map(type => (
          <span className="heading-seven list-item-validasi">{type}</span>
        ))}
      </div>

      {props.dataValidasi.listItems.map(item => (
        <div className="row-box">
          <span className="lead-seven list-item-validasi">{item.nama}</span>
          <span className="lead-seven list-item-validasi">{item.jumlahSampah} buah</span>
          <span className="lead-seven list-item-validasi">
            <button className="lihat-btn">Lihat</button>
          </span>
        </div>
      ))}

      <div className="line-break-validasi"></div>

      <div className="row-box">
        <span className="lead-seven list-item-validasi">Jumlah</span>
        <span className="lead-seven list-item-validasi">5 buah</span>
        <span className="lead-seven list-item-validasi"></span>
      </div>
    </div>
  )
}

export default ValidasiBox