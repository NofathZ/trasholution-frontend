import React, { useEffect } from 'react';
import Layout from '../layout/Layout';
import HeadingTitle from '../components/heading-title/HeadingTitle';
import ThLogo from '../assets/th-logo.png'
import RequestMenu from '../components/request-menu/RequestMenu';
import API from '../api/api';
import { useHistory } from 'react-router';

const HalamanPenjemputanSampah = () => {

  const history = useHistory()

  useEffect(async () => {
    const token = localStorage.getItem('token')
    const currentPenjemputan = await API.get('/api/t/current-penjemputan', {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    })

    if (currentPenjemputan.data.data != null) {
      history.push(`/trashpicker/terima-permintaan/${currentPenjemputan.data.data.id}/dijalan`)
    }
  },[])

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
