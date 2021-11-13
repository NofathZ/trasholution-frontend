import React, { useEffect, useState } from 'react';
import Layout from '../layout/Layout';
import HeadingTitle from '../components/heading-title/HeadingTitle';
import SaldoInfo from '../components/saldo/SaldoInfo';
import Withdraw from '../components/saldo/Withdraw';
import API from '../api/api';

const FormPencairanSaldo = () => {

  const token = localStorage.getItem('token')
  const [saldo, setSaldo] = useState(0)
  const [phone, setPhone] = useState(0)

  useEffect(async () => {
    const dataPengguna = await API.get('/api/p/profile', {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    })

    setPhone(dataPengguna.data.data.phone)
    setSaldo(dataPengguna.data.data.saldo)
  }, [])

  return (
    <Layout>
      <HeadingTitle>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 19L8 12L15 5" stroke="#35BE80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <h3 className="heading-three main-color">Pencairan Saldo</h3>
      </HeadingTitle>
      <SaldoInfo saldo={saldo} />
      <Withdraw phone={phone} />
    </Layout>
  )
}
export default FormPencairanSaldo;
