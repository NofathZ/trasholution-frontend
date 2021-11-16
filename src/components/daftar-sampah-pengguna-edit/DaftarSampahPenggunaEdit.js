import { ButtonValid } from '../button/ButtonValid'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router'
// import Question from './Question'
import API from '../../api/api'
import Question from '../form-input-sampah/Question'
import QuestionEditValidation from '../form-input-sampah/QuestionEditValidation'

const DaftarSampahPenggunaEdit = () => {

  // const [idx, setIdx] = useState(0)
  const [daftarSampah, setDaftarSampah] = useState([])
  const [sampahBerubah, setSampahBerubah] = useState([])
  const [namaSampah, setNamaSampah] = useState([])
  const { id } = useParams()
  const token = localStorage.getItem('token')


  useEffect(async () => {
    const semuaSampah = []
    const { data } = await API.get('/api/daftar-sampah')

    data.data.forEach(data => {
      if (!semuaSampah.includes(data.semuaSampah)) {
        semuaSampah.push(
          {
            id: data.id,
            nama: data.nama
          }
        )
      }
    })

    setNamaSampah(semuaSampah)
  }, [])

  useEffect(async () => {
    const daftarSampah = await API.get(`/api/t/daftar-permintaan/${id}`, {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    })

    if (daftarSampah.data.data && daftarSampah.data.data.daftar_sampah) {
      setDaftarSampah(daftarSampah.data.data.daftar_sampah)

      const sampahBaru = []

      daftarSampah.data.data.daftar_sampah.forEach(sampah => {
        const data = {
          kuantitas: sampah.kuantitas,
          id: sampah.sampah.id
        }

        sampahBaru.push(data)
        console.log(sampahBaru)
      })
    }

  }, [])

  const showOutput = async (e) => {

  }

  const handleInput = () => {

  }

  return (
    <form onSubmit={showOutput}>
      <div className="form-input-sampah-box main-color-bg">
        <div className="row-box-input">
          <span className="lead-seven list-item-input">Nama</span>
          <span className="lead-seven list-item-input">Jumlah</span>
          <span className="lead-seven list-item-input">Gambar</span>
        </div>

        {daftarSampah.map((sampah, idx) => {
          return (
            <QuestionEditValidation namaSampah={namaSampah} idx={idx} tipeSampah={sampah.sampah.id} jumlahSampah={sampah.kuantitas} handleInput={(val) => handleInput(val, idx)} key={idx} />
            // <div className="row-box-input">
            //   <span className="lead-seven list-item-input">
            //     <select className="jenis-sampah-dropdown input-sampah-column" required value={sampah.sampah.id}>
            //       {namaSampah.map(sampah => {
            //         return (
            //           <option value={sampah.id} key={sampah.id}>{sampah.nama}</option>
            //         )
            //       })}
            //     </select>
            //   </span>
            //   <span className="lead-seven list-item-input">
            //     <input className="input-sampah-column" type="number" required />
            //   </span>
            //   <span className="lead-seven list-item-input">
            //     <button type="button" className="lihat-btn">Lihat</button>
            //   </span>
            // </div>
          )
        })}
      </div>
      <ButtonValid className="lead-five" type="submit" style={{ marginTop: "28px" }}>Jual</ButtonValid>
    </form>
  )
}

export default DaftarSampahPenggunaEdit