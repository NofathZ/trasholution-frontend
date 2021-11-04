import React from 'react';
import Layout from '../layout/Layout';
import ThLogo from '../assets/th-logo.png'
import HeadingTitle from '../components/heading-title/HeadingTitle';
import MenuBox from '../components/menu-box/MenuBox';

const HalamanUtama = () => {
  return (
    <Layout>
      <HeadingTitle>
        <img src={ThLogo} alt="" />
        <div />
      </HeadingTitle>
      <div style={{ textAlign: "center", marginBottom: "56px" }}>
        <span className="lead-three main-color">Hallo </span>
        <span className="heading-three main-color">Alfonsus!</span>
      </div>
      <MenuBox />
    </Layout>
  )
}

export default HalamanUtama;
