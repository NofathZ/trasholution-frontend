import Layout from "../layout/Layout"
import HeadingTitle from "../components/heading-title/HeadingTitle"
import MapTrashpickerDijalan from "../components/map-trashpicker-dijalan/MapTrashpickerDijalan"
import InfoTrashpicker from "../components/info-trashpicker/InfoTrashpicker"
import InfoTrashpickerDijalan from "../components/info-trashpicker-dijalan/InfoTrashpickerDijalan"
import API from "../api/api"
import { useState, useEffect } from "react"
import { useParams } from "react-router"

const TerimaPermintaanKondisiDijalan = (props) => {

  // Perlu mengubah status trashpicker karena sedang dalam proses mengambil sampah

  const { id } = useParams()
  const token = localStorage.getItem('token')
  const [detailInformasiPermintaan, setDetailInformasiPermintaan] = useState({})

  useEffect(async () => {

     // Update lokasi trashpicker
    navigator.geolocation.getCurrentPosition(function (position) {
      const locationUser = {
        "lat": position.coords.latitude,
        "long": position.coords.longitude
      }

      API.put('/api/t/update-lokasi', locationUser, {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      })
    });

    const dataDetail = await API.get(`api/t/daftar-permintaan/${id}`, {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    })
    await setDetailInformasiPermintaan(dataDetail.data.data) 
    console.log(dataDetail.data.data)
  }, [])

  return (
    <Layout style={{ paddingBottom: "28px" }}>
      <HeadingTitle>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 19L8 12L15 5" stroke="#35BE80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <h3 className="heading-three main-color">Terima Permintaan</h3>
      </HeadingTitle>
      <InfoTrashpickerDijalan id={id} detailInformasiPermintaan={detailInformasiPermintaan} />
    </Layout>
  )
}

export default TerimaPermintaanKondisiDijalan