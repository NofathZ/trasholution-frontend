import { useEffect, useState } from 'react';
import Layout from '../layout/Layout';
import HeadingTitle from '../components/heading-title/HeadingTitle';
import BoxDaftarSampah from '../components/box-daftar-sampah/BoxDaftarSampah';
import API from '../api/api'

const HalamanDaftarSampah = () => {
  const [daftarSampah, setDaftarSampah] = useState([]);

  useEffect(async () => {
    const { data } = await API.get("/api/daftar-sampah");

    const jenis = [];

    const structured = [];

    data.data.forEach((sampah) => {
      if (!jenis.includes(sampah.jenis)) {
        jenis.push(sampah.jenis);
      }
    });

    jenis.forEach((j) => {
      const sampahDenganJenisIni = data.data.filter((sampah) => {
        return sampah.jenis === j;
      });
      structured.push({ jenis: j, daftarSampah: sampahDenganJenisIni });
    });

    setDaftarSampah(structured);
    console.log(structured)
  }, []);

  return (
    <>
      <Layout>
        <HeadingTitle>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 19L8 12L15 5" stroke="#35BE80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <h3 className="heading-three main-color">Daftar Sampah</h3>
        </HeadingTitle>
        <BoxDaftarSampah daftarSampah={daftarSampah} />
      </Layout>
    </>
  )
}

export default HalamanDaftarSampah;
