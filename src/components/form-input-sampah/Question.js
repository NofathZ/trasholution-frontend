import "./FormInputSampah.css"
import InputDropdown from "../input-form/InputDropdown"

const Question = (props) => {

  const tipeSampah = ["a", "b"]

  const output = () => {
    const nama = document.querySelector(`#nama-sampah${props.idx}`).value
    const jumlah = document.querySelector(`#jumlah-sampah${props.idx}`).value
    props.handleInput({nama, kuantitas: jumlah}, props.idx)
  }

  return (
    <div className="row-box-input">
      <span className="lead-seven list-item-input">
        {/* <input id="nama-sampah" className="input-sampah-column" type="text" onChange={(e) => setNama(e.target.value)} /> */}
        <input id={`nama-sampah${props.idx}`} className="input-sampah-column" type="text" onChange={output} />
      </span>
      <span className="lead-seven list-item-input">
        <input id={`jumlah-sampah${props.idx}`} className="input-sampah-column" type="number" onChange={output} />
      </span>
      <span className="lead-seven list-item-input">
        <button className="lihat-btn">Lihat</button>
      </span>
    </div>
  )
}

export default Question