import React from 'react';
import Layout from '../layout/Layout';
import HeadingTitle from '../components/heading-title/HeadingTitle';
import BoxDaftarSampah from '../components/box-daftar-sampah/BoxDaftarSampah';

const HalamanDaftarSampah = () => {
  return (
    <>
      <Layout>
        <HeadingTitle>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 19L8 12L15 5" stroke="#35BE80" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          <h3 className="heading-three main-color">Daftar Sampah</h3>
        </HeadingTitle>
        <BoxDaftarSampah />
      </Layout>
    </>
  )
}

export default HalamanDaftarSampah;
