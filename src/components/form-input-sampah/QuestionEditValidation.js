import "./FormInputSampah.css"
import { useState } from "react"
import { useEffect } from "react/cjs/react.development"

const QuestionEditValidation = (props) => {

  const [sampahId, setSampahId] = useState(0)
  const [sampahKutantitas, setSampahKutantitas] = useState(0)

  useEffect(() => {
    setSampahId(props.tipeSampah)
  }, [props.tipeSampah])

  const output = () => {
    const jumlah = document.querySelector(`#jumlah-sampah${props.idx}`).value
    var jenisField = document.getElementById(`id-sampah${props.idx}`);
    var value = jenisField.options[jenisField.selectedIndex].value;
    props.handleInput({ id_sampah: value, kuantitas: jumlah }, props.idx)
  }

  return (
    <div className="row-box-input">
      <span className="lead-seven list-item-input">
        <select id={`id-sampah${props.idx}`} className="jenis-sampah-dropdown input-sampah-column" onChange={output} required>
          {props.namaSampah.map(sampah => {
            return (
              <option value={sampah.id} key={sampah.id}>{sampah.nama}</option>
            )
          })}
        </select>
      </span>
      <span className="lead-seven list-item-input">
        <input id={`jumlah-sampah${props.idx}`} className="input-sampah-column" type="number" onChange={output} required value={props.jumlahSampah} />
      </span>
      <span className="lead-seven list-item-input">
        <button type="button" className="lihat-btn">Lihat</button>
      </span>
    </div>
  )
}

export default QuestionEditValidation