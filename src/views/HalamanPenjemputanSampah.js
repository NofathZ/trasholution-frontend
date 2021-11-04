import React from 'react';
import Layout from '../layout/Layout';
import HeadingTitle from '../components/heading-title/HeadingTitle';
import ThLogo from '../assets/th-logo.png'
import RequestMenu from '../components/request-menu/RequestMenu';

const HalamanPenjemputanSampah = () => {
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
