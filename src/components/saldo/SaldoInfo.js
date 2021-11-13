import "./SaldoInfo.css"

const SaldoInfo = (props) => {
  return (
    <div className="saldo-info-wrapper">
      <div className="saldo-title">
        <h6 className="lead-six secondary-color">Saldo Anda Saat Ini</h6>
        <h3 className="heading-three secondary-color">Rp. {props.saldo}</h3>
      </div>
    </div>
  )
}

export default SaldoInfo