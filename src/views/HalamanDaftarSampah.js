import { useEffect, useState } from 'react';
import Layout from '../layout/Layout';
import HeadingTitle from '../components/heading-title/HeadingTitle';
import BoxDaftarSampah from '../components/box-daftar-sampah/BoxDaftarSampah';
import API from '../api/api'

const HalamanDaftarSampah = () => {

  const [daftarSampah, setDaftarSampah] = useState([])
  const [dataTemp, setDataTemp] = useState([])

  useEffect(async () => {
    const { data } = await API.get('/api/daftar-sampah')
    setDataTemp(data.data)
    // const plastik = await data.data.filter(el => {
    //   return
    // })
    // console.log(dataTemp)

    const plastik = await dataTemp.filter((el) => {
      return el.jenis.toLowerCase() == "plastik"
    })

    console.log(plastik)


    // const kertas = dataTemp.filter((el) => {
    //   return el.jenis.toLowerCase() == "kertas"
    // })
    // // setDaftarSampah(plastik, kertas)

    // let isiData = []
    // isiData.push(plastik)
    // isiData.push(kertas)
    // daftarSampah.push(plastik)
    // daftarSampah.push(kertas)
    // setDaftarSampah(isiData)
  }, [])

  return (
    <>
      <Layout>
        <HeadingTitle>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 19L8 12L15 5" stroke="#35BE80" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          <h3 className="heading-three main-color">Daftar Sampah</h3>
        </HeadingTitle>
        <BoxDaftarSampah dataSampah={daftarSampah} />
      </Layout>
    </>
  )
}

export default HalamanDaftarSampah;
