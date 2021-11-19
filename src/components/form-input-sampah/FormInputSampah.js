import './FormInputSampah.css'
import { ButtonValid } from '../button/ButtonValid'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import Question from './Question'
import API from '../../api/api'

const FormInputSampah = () => {

  const [idx, setIdx] = useState(0)
  const [outputList, setOutputList] = useState([])
  const [inputList, setInputList] = useState([])
  const [namaSampah, setNamaSampah] = useState([])
  const token = localStorage.getItem('token')
  const history = useHistory()

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

  const handleInput = (val) => {
    outputList[idx] = val
  }

  const onAddBtnClick = event => {
    setInputList(inputList.concat(<Question namaSampah={namaSampah} idx={idx} handleInput={(val) => handleInput(val, idx)} key={inputList.length} />));
    setIdx(idx + 1)
  };

  const showOutput = async (e) => {
    try {
      e.preventDefault()
      const dataReady = {
        "daftar_sampah": outputList
      }

      navigator.geolocation.getCurrentPosition(async function (position) {
        const locationUser = {
          "lat": position.coords.latitude,
          "long": position.coords.longitude
        }

        await API.put('/api/p/update-lokasi', locationUser, {
          headers: {
            "Authorization": `Bearer ${token}`
          }
        })
      });

      await API.post('/api/p/jual-sampah', dataReady, {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      })

      history.push('/menunggu-trashpicker')
    }
    catch (err) {
      console.error(err)
    }
  }

  return (
    <form onSubmit={showOutput}>
      <div className="form-input-sampah-box main-color-bg">
        <div className="row-box-input">
          <span className="lead-seven list-item-input">Nama</span>
          <span className="lead-seven list-item-input">Jumlah</span>
        </div>

        {inputList}

        <button className="btn-add-item" onClick={onAddBtnClick}>
          <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.656 8.448H8.48V12.72H4.592V8.448H0.416V4.776H4.592V0.48H8.48V4.776H12.656V8.448Z" fill="white" />
          </svg>
        </button>
      </div>
      {/* <Link to={'/menunggu-trashpicker'} style={{ textDecoration: "none" }}> */}
        <ButtonValid className="lead-five" type="submit" style={{ marginTop: "28px" }}>Jual</ButtonValid>
      {/* </Link> */}
    </form>
  )
}

export default FormInputSampah