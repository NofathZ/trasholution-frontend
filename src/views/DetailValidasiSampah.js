import React, { useEffect, useState } from 'react';
import Layout from '../layout/Layout';
import HeadingTitle from '../components/heading-title/HeadingTitle';
import ValidasiBox from '../components/validasi-box/ValidasiBox';
import "./DetailValidasiSampah.css"
import { ButtonValid } from '../components/button/ButtonValid';
import { ButtonInvalid } from '../components/button/ButtonInvalid';
import { useParams, useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import API from '../api/api';

const DetailValidasiSampah = (props) => {

  const token = localStorage.getItem("token")
  const { id } = useParams()
  const [daftarSampah, setDaftarSampah] = useState([])
  const history = useHistory()

  useEffect(async () => {
    const dataPermintaan = await API.get(`/api/t/daftar-permintaan/${id}`, {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    })

    await setDaftarSampah(dataPermintaan.data.data.daftar_sampah)
  }, [])

  const tipeKolom = ["Nama", "Jumlah Sampah"]

  const validasiSelesai = async () => {
    const data = await API.get(`/api/t/daftar-permintaan/${id}/selesai`, {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    })
    history.push('/trashpicker')
  }

  const invalidSampah =() => {
    history.push(`/trashpicker/edit-sampah-pengguna/${id}`)
  }

  return (
    <Layout>
      <HeadingTitle>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 19L8 12L15 5" stroke="#35BE80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <h3 className="heading-three main-color">Validasi Sampah</h3>
      </HeadingTitle>
      <div style={{ marginTop: "20px" }}>
        <h4 className="heading-four" style={{ color: "#C9C9C9", textAlign: "center" }}>Marlina</h4>
        <div className="detail-underline-heading"></div>
        <h6 className="heading-six main-color" style={{ textAlign: "center" }}>Jl. masfistaosa no.59  </h6>
      </div>
      <ValidasiBox tipeKolom={tipeKolom} daftarSampah={daftarSampah} />
      <div className="button-choice">
        <ButtonValid className="heading-five" onClick={validasiSelesai}>Valid</ButtonValid>
        <ButtonInvalid className="heading-five" onClick={invalidSampah}>Invalid</ButtonInvalid>
      </div>
    </Layout>
  )
}

export default DetailValidasiSampah;
