import React from 'react';
import Layout from '../layout/Layout';
import HeadingTitle from '../components/heading-title/HeadingTitle';
import InputVerif from '../components/input-form/InputVerif';
import { ButtonValid } from '../components/button/ButtonValid';

const HalamanVerifikasi = () => {
  return (
    <Layout>
      <HeadingTitle>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 19L8 12L15 5" stroke="#35BE80" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        <div></div>
      </HeadingTitle>
      <h2 className="heading-two" style={{ textAlign: "center", color: "#35BE80", margin: "34px 0" }}>Verifikasi OTP</h2>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginBottom: "17px" }}>
        <svg width="83" height="68" viewBox="0 0 83 68" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M67.6707 31.8587L83 0L29 16.8524L49.691 21.1876L49.7878 32L55.9955 26.2206L51.1647 21.6359L67.6707 31.8609V31.8587Z" fill="#35BE80" />
          <path d="M1.28699 67C-0.757742 57.2139 8.31984 39.0385 22.2869 47C36.254 54.9615 50.2869 41.9375 50.2869 29" stroke="#35BE80" stroke-dasharray="2 2" />
        </svg>
      </div>
      <div style={{ width: "227px", margin: "0 auto", color: "#969696", marginBottom: "78px" }}>
        <span className="lead-five">Masukan OTP yang telah dikirim ke email </span>
        <span className="heading-five">marlina@gmail.com</span>
      </div>
      <InputVerif />
      <div className="lead-five" style={{ textAlign: "center", marginTop: "78px" }}>
        <span style={{ color: "#969696" }}>Tidak menerima OTP? </span>
        <span style={{ color: "#35BE80" }}>Resend</span>
      </div>

      <ButtonValid className="heading-five">Kirim</ButtonValid>
    </Layout>
  )
}

export default HalamanVerifikasi;
