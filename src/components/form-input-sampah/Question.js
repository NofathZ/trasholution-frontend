import "./FormInputSampah.css"

const Question = (props) => {

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
        <input id={`jumlah-sampah${props.idx}`} className="input-sampah-column" type="number" onChange={output} min="0" max="99999" required />
      </span>
    </div>
  )
}

export default Question