import { useState, useEffect } from 'react';
import Layout from '../layout/Layout';
import HeadingTitle from '../components/heading-title/HeadingTitle';
import ThLogo from '../assets/th-logo.png'
import MenuBoxTrashpicker from '../components/menu-box-trashpicker/MenuBoxTrashpicker';
import ButtonSwitch from '../components/button/ButtonSwitch';
import "./HalamanUtamaTrashpicker.css"

const HalamanUtamaTrashpicker = () => {
  const [status, setStatus] = useState(
    localStorage.getItem('activeStatus') == "false" ? false : true
  )

  useEffect(() => {
    localStorage.setItem('activeStatus', status)
    console.log(localStorage.getItem('activeStatus'))
  }, [status])

  return (
    <Layout className="bg-halaman-utama-trashpicker">
      <HeadingTitle>
        <img src={ThLogo} alt="" />
        <div />
      </HeadingTitle>
      <div style={{ textAlign: "center" }}>
        <span className="lead-three main-color">Hallo </span>
        <span className="heading-three main-color">Trashpicker!</span>
      </div>
      <div style={{ textAlign: "center", marginBottom: "56px" }}>
        <span className="lead-six secondary-color">You're </span>
        <span className="heading-six secondary-color">
          {status ? "Online" : "Offline"}
        </span>
      </div>
      <MenuBoxTrashpicker status={status} />
      <div className="button-status-box">
        <ButtonSwitch status={status} changeStatus={(status) => setStatus(!status)} />
      </div>
    </Layout>
  )
}

export default HalamanUtamaTrashpicker;
