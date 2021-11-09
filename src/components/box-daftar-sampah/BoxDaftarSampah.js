import "./BoxDaftarSampah.css"
import JenisSampah from "./JenisSampah"

const BoxDaftarSampah = (props) => {
  return (
    <div className="box-daftar-sampah main-color-bg">
      <div>
        {props.daftarSampah.map(sampah => (
          <JenisSampah jenis={sampah.jenis} daftarSampah={sampah.daftarSampah} key={sampah.jenis} />
        ))}
      </div>
    </div>
  )
}

export default BoxDaftarSampah