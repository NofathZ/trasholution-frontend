import "./BoxDaftarSampah.css"
import JenisSampah from "./JenisSampah"

const BoxDaftarSampah = () => {
  return (
    <div className="box-daftar-sampah main-color-bg">
      <div className="jenis-sampah">
        <h5 className="jenis-sampah-title heading-five">Jenis Sampah</h5>
        <div className="list-sampah">
          <span className="baris-data lead-eight">No</span>
          <span className="baris-data lead-eight">Nama</span>
          <span className="baris-data lead-eight">Ukuran</span>
          <span className="baris-data lead-eight">Harga</span>
        </div>
        <JenisSampah />
        <JenisSampah /> 
      </div>

      
    </div>
  )
}

export default BoxDaftarSampah