import './FormInputSampah.css'
import { ButtonValid } from '../button/ButtonValid'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Question from './Question'
import API from '../../api/api'

const FormInputSampah = () => {

  const [idx, setIdx] = useState(0)
  const [outputList, setOutputList] = useState([])
  const [inputList, setInputList] = useState([])
  const [namaSampah, setNamaSampah] = useState([])

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

  const showOutput = (e) => {
    e.preventDefault()
    console.log(outputList)
  }

  return (
    <form onSubmit={showOutput}>
      <div className="form-input-sampah-box main-color-bg">
        <div className="row-box-input">
          <span className="lead-seven list-item-input">Nama</span>
          <span className="lead-seven list-item-input">Jumlah</span>
          <span className="lead-seven list-item-input">Gambar</span>
        </div>

        {inputList}

        <button className="btn-add-item" onClick={onAddBtnClick}>
          <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.656 8.448H8.48V12.72H4.592V8.448H0.416V4.776H4.592V0.48H8.48V4.776H12.656V8.448Z" fill="white" />
          </svg>
        </button>
      </div>
      {/* <Link to={'/permintaan-diterima'} style={{ textDecoration: "none" }}> */}
      <ButtonValid className="lead-five" style={{ marginTop: "28px" }}>Jual</ButtonValid>
      {/* </Link> */}
    </form>
  )
}

export default FormInputSampah