import { useState, useEffect } from 'react';
import Layout from '../layout/Layout';
import HeadingTitle from '../components/heading-title/HeadingTitle';
import ThLogo from '../assets/th-logo.png'
import MenuBoxTrashpicker from '../components/menu-box-trashpicker/MenuBoxTrashpicker';
import ButtonSwitch from '../components/button/ButtonSwitch';
import "./HalamanUtamaTrashpicker.css"
import API from '../api/api'

const HalamanUtamaTrashpicker = () => {

  const [status, setStatus] = useState(false)
  const token = localStorage.getItem('token')
  const nama = localStorage.getItem('nama')

  useEffect(async () => { // trying
    const token = localStorage.getItem('token')
    const currentPenjualan = await API.get('/api/t/current-penjemputan', {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    })

    console.log(currentPenjualan)
  }, [])
  
  useEffect(async () => {
    const profile = await API.get('/api/t/profile', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    setStatus(profile.data.data.availability)
  }, [])

  const changeStatus = async () => {
    if (status) {
      await API.get('/api/t/update-status/offline', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      setStatus(false)
    }
    else {
      await API.get('/api/t/update-status/online', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      setStatus(true)
    }
  }

  return (
    <Layout className="bg-halaman-utama-trashpicker">
      <HeadingTitle>
        <img src={ThLogo} alt="" />
        <div />
      </HeadingTitle>
      <div style={{ textAlign: "center" }}>
        <span className="lead-three main-color">Hallo </span>
        <span className="heading-three main-color">{nama || "Trashpicker"}</span>
      </div>
      <div style={{ textAlign: "center", marginBottom: "56px" }}>
        <span className="lead-six secondary-color">You're </span>
        <span className="heading-six secondary-color">
          {status ? "Online" : "Offline"}
        </span>
      </div>
      <MenuBoxTrashpicker status={status} />
      <div className="button-status-box">
        <ButtonSwitch status={status} changeStatus={() => changeStatus()} />
      </div>
    </Layout>
  )
}

export default HalamanUtamaTrashpicker;
