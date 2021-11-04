import React from 'react';
import Layout from '../layout/Layout';
import HeadingTitle from '../components/heading-title/HeadingTitle';
import ValidasiBox from '../components/validasi-box/ValidasiBox';
import "./DetailValidasiSampah.css"
import { ButtonValid } from '../components/button/ButtonValid';
import { ButtonInvalid } from '../components/button/ButtonInvalid';

const DetailValidasiSampah = () => {
  const dataValidasi = {
    type: ["Nama", "Jumlah Sampah", "Gambar"],
    listItems: [
      {
        nama: "Botol",
        jumlahSampah: 1,
        gambar: ""
      },
      {
        nama: "Botol",
        jumlahSampah: 1,
        gambar: ""
      },
      {
        nama: "Botol",
        jumlahSampah: 1,
        gambar: ""
      },
      {
        nama: "Botol",
        jumlahSampah: 1,
        gambar: ""
      }
    ]
  }
  return (
    <Layout>
      <HeadingTitle>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 19L8 12L15 5" stroke="#35BE80" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        <h3 className="heading-three main-color">Validasi Sampah</h3>
      </HeadingTitle>
      <div style={{marginTop: "20px"}}>
        <h4 className="heading-four" style={{ color: "#C9C9C9", textAlign: "center" }}>Marlina</h4>
        <div className="detail-underline-heading"></div>
        <h6 className="heading-six main-color" style={{ textAlign: "center" }}>Jl. masfistaosa no.59  </h6>
      </div>
      <ValidasiBox dataValidasi={dataValidasi} />
      <div className="button-choice">
        <ButtonValid className="heading-five">Valid</ButtonValid>
        <ButtonInvalid className="heading-five">Invalid</ButtonInvalid>
      </div>
    </Layout>
  )
}

export default DetailValidasiSampah;
