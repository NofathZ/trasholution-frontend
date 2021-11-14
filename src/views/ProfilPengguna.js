import "./ProfilPengguna.css"
import { useContext, useEffect, useState } from "react"
import LayoutFixed from '../layout/LayoutFixed'
import HeadingTitle from "../components/heading-title/HeadingTitle"
import ContentProfilPengguna from "../components/content-profil-pengguna/ContentProfilPengguna"
import API from "../api/api"

const ProfilPengguna = () => {

  const [dataPengguna, setDataPengguna] = useState([])
  const [lokasiPengguna, setLokasiPengguna] = useState("")

  useEffect(async () => {
    const token = localStorage.getItem('token')
    const dataPengguna = await API.get('/api/p/profile', {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`
      }
    })
    const lokasi = {
      lat: dataPengguna.data.data.lat,
      long: dataPengguna.data.data.long
    }

    const getLokasi = await API.post('/api/lokasi', lokasi)
    setDataPengguna(dataPengguna.data.data)
    setLokasiPengguna(getLokasi.data.data.label)
  }, [])

  return (
    <LayoutFixed className="outer-padding-profil-pengguna">
      <div className="container-profil-pengguna">
        <HeadingTitle>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 19L8 12L15 5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <div></div>
        </HeadingTitle>
        <img className="img-user" />
        <h3 className="heading-three" style={{ color: "white", textAlign: "center" }}>{dataPengguna.nama}</h3>
        <ContentProfilPengguna dataPengguna={dataPengguna} lokasi={lokasiPengguna} />
      </div>
    </LayoutFixed>
  )
}

export default ProfilPengguna;
