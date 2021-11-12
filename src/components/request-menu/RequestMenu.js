import { Link } from "react-router-dom"
import RequestBox from "./RequestBox"
import "./RequestBox.css"
import API from "../../api/api"
import { useEffect, useState } from "react"

const RequestMenu = () => {

  const token = localStorage.getItem('token')
  const [daftarPermintaan, setDaftarPermintaan] = useState([])

  useEffect(async () => {
    const daftarPermintaan = await API.get('/api/t/daftar-permintaan', {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    })
    setDaftarPermintaan(daftarPermintaan.data.data)
  }, [])
  return (
    <>
      <h3 className="lead-three main-color" style={{ textAlign: "center" }}>Request</h3>
      <div className="line-break"></div>
      {daftarPermintaan.map((permintaan, idx) => (
        <Link to={`/trashpicker/terima-permintaan/${permintaan.id}`} style={{ textDecoration: "none" }} key={idx}>
          <RequestBox type="Request Penjemputan" name={permintaan.nama}></RequestBox>
        </Link>
      ))}
    </>
  )
}

export default RequestMenu