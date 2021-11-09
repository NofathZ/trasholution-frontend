import "./BoxDaftarSampah.css"

const JenisSampah = (props) => {

  return (
    <div className="jenis-sampah">
      <h5 className="jenis-sampah-title heading-five">Sampah {props.jenis}</h5>
      <div className="list-sampah">
        <span className="baris-data lead-eight">No</span>
        <span className="baris-data lead-eight">Nama</span>
        <span className="baris-data lead-eight">Ukuran</span>
        <span className="baris-data lead-eight">Harga</span>
      </div>
      {props.daftarSampah.map((sampah, idx) => (
        <div className="list-sampah" key={sampah.id}>
          <span className="baris-data lead-eight">{idx + 1}</span>
          <span className="baris-data lead-eight">{sampah.nama}</span>
          <span className="baris-data lead-eight">{sampah.ukuran}</span>
          <span className="baris-data lead-eight">{sampah.harga}</span>
        </div>
      ))}
    </div>
  )
}

export default JenisSampah