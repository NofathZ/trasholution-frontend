import React, { useEffect } from 'react';
import Layout from '../layout/Layout';
import HeadingTitle from '../components/heading-title/HeadingTitle';
import ThLogo from '../assets/th-logo.png'
import RequestMenu from '../components/request-menu/RequestMenu';
import api from '../api/api';

const HalamanPenjemputanSampah = () => {

  useEffect(async () => {
    const token = localStorage.getItem('token')
    const data = await api.get('/api/t/current-penjemputan', {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    })

    console.log(data)
  },[])

  // ngetes doang

  return (
    <Layout>
      <HeadingTitle>
        <img src={ThLogo} alt="" />
        <h3 className="heading-three main-color">Penjemputan Sampah</h3>
      </HeadingTitle>
      <RequestMenu />
    </Layout>
  )
}

export default HalamanPenjemputanSampah;
