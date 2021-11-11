import React from 'react';
import Layout from '../layout/Layout';
import ThLogo from '../assets/th-logo.png'
import HeadingTitle from '../components/heading-title/HeadingTitle';
import MenuBox from '../components/menu-box/MenuBox';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import "./HalamanUtama.css"
import { useState } from 'react/cjs/react.development';

const HalamanUtama = () => {

  const [namaUser, setNamaUser] = useState("Pengguna")

  useEffect(async () => {
    const token = await localStorage.getItem('token')
    const nama = await localStorage.getItem('nama')
    
    if (token) {
      setNamaUser(nama)
    }
  },[])

  return (
    <Layout className="bg-halaman-utama">
      <HeadingTitle>
        <img src={ThLogo} alt="" />
        <div />
      </HeadingTitle>
      <div style={{ textAlign: "center", marginBottom: "56px" }}>
        <span className="lead-three main-color">Hallo </span>
        <span className="heading-three main-color">{namaUser}</span>
      </div>
      <MenuBox />
      {localStorage.getItem("token") ? "" :
        <Link className="login-btn heading-six main-color" style={{ textDecoration: "none" }} to={'/login'}>Login</Link>
      }
    </Layout>
  )
}

export default HalamanUtama;
