import './FormInputSampah.css'
import { ButtonValid } from '../button/ButtonValid'
import { Link } from 'react-router-dom'

const FormInputSampah = () => {
  return (
    <>
      <div className="form-input-sampah-box main-color-bg">
        <div className="row-box-input">
          <span className="lead-seven list-item-input">Nama</span>
          <span className="lead-seven list-item-input">Jumlah</span>
          <span className="lead-seven list-item-input">Gambar</span>
        </div>


        <div className="row-box-input">
          <span className="lead-seven list-item-input">
            <input className="input-sampah-column" type="text" value="Gelas" />
          </span>
          <span className="lead-seven list-item-input">
            <input className="input-sampah-column" type="number" value="1" />
          </span>
          <span className="lead-seven list-item-input">
            <button className="lihat-btn">Edit</button>
          </span>
        </div>

        <div className="row-box-input">
          <span className="lead-seven list-item-input">
            <input className="input-sampah-column" type="text" />
          </span>
          <span className="lead-seven list-item-input">
            <input className="input-sampah-column" type="number" />
          </span>
          <span className="lead-seven list-item-input">
            <button className="lihat-btn">Lihat</button>
          </span>
        </div>


        <button className="btn-add-item">
          <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.656 8.448H8.48V12.72H4.592V8.448H0.416V4.776H4.592V0.48H8.48V4.776H12.656V8.448Z" fill="white" />
          </svg>
        </button>
      </div>
      <Link to={'/permintaan-diterima'} style={{ textDecoration: "none" }}>
        <ButtonValid className="lead-five" style={{ marginTop: "28px" }}>Jual</ButtonValid>
      </Link>
    </>
  )
}

export default FormInputSampah