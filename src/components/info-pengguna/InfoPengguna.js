import DaftarSampahPermintaan from '../daftar-sampah-permintaan/DaftarSampahPermintaan'
import MapPengguna from '../map-pengguna/MapPengguna'
import "./InfoPengguna.css"

const InfoPengguna = () => {
  return (
    <div className="info-pengguna-wrapper">
      <h6 className="lead-six secondary-color" style={{marginTop:"21px"}}>Nama Pengguna</h6>
      <h4 className="heading-four secondary-color" style={{marginTop:"3px"}}>Marlina</h4>
      <h6 className="lead-six secondary-color" style={{marginTop:"12px"}}>Alamat Pengguna</h6>
      <h4 className="heading-four secondary-color" style={{marginTop:"3px"}}>jl. masfistaosa no.59</h4>
      <h6 className="lead-six secondary-color" style={{marginTop:"15px", marginBottom:"10px"}}>Detail map</h6>
      <MapPengguna />
      <h6 className="lead-six secondary-color" style={{margin:"9px 0"}}>Detail Sampah</h6>
      <DaftarSampahPermintaan />
      <button className="terima-permintaan-btn heading-five">Terima Permintaan</button>
    </div>
  )
}

export default InfoPengguna