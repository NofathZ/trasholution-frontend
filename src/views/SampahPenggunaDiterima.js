import Layout from '../layout/Layout'
import HeadingTitle from '../components/heading-title/HeadingTitle'
import InfoTrashpicker from '../components/info-trashpicker/InfoTrashpicker'
import { useEffect, useState } from 'react'
import API from '../api/api'
import { useHistory } from 'react-router'

const SampahPenggunaDiterima = () => {

  const token = localStorage.getItem('token')
  const [dataPenjualan, setDataPenjualan] = useState([])
  const history = useHistory()

  useEffect(async () => {
    const dataPenjualan = await API.get('/api/p/current-penjualan', {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    })

    setDataPenjualan(dataPenjualan.data)
    
    if (dataPenjualan.data.data == null) {
      history.push('/')
    }
  }, [])
  
  return (
    <Layout style={{ paddingBottom: "28px" }}>
      <HeadingTitle>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 19L8 12L15 5" stroke="#35BE80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <h3 className="heading-three main-color">Penjemputan Sampah</h3>
      </HeadingTitle>
      <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ margin: "38px auto 0 auto", display: "block" }}>
        <path d="M33.3333 14.5833C33.3333 19.1857 29.6024 22.9167 25 22.9167C20.3976 22.9167 16.6667 19.1857 16.6667 14.5833C16.6667 9.98096 20.3976 6.25 25 6.25C29.6024 6.25 33.3333 9.98096 33.3333 14.5833Z" stroke="#C9C9C9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M25 29.1667C16.9459 29.1667 10.4167 35.6958 10.4167 43.75H39.5833C39.5833 35.6958 33.0542 29.1667 25 29.1667Z" stroke="#C9C9C9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <InfoTrashpicker dataPenjualan={dataPenjualan} />
    </Layout>
  )
}

export default SampahPenggunaDiterima