import "./SaldoInfo.css"

const SaldoInfo = () => {
  return (
    <div className="saldo-info-wrapper">
      <div className="saldo-title">
        <h6 className="lead-six secondary-color">Saldo Anda Saat Ini</h6>
        <h3 className="heading-three secondary-color">Rp. 43.234,00</h3>
      </div>

      <div className="today-status">
        <div className="percentation-status">
          <div className="circle">
            <h1 className="heading-one secondary-color">0%</h1>
            <h6 className="lead-eight secondary-color">Pemasukan</h6>
          </div>
        </div>
        <div className="desc-status">
          <div className="hari-ini lead-nine" style={{ color: "white" }}>Hari Ini</div>
          <h6 className="lead-eight secondary-color">Total Pemasukkan</h6>
          <h6 className="heading-six secondary-color" style={{ marginBottom: "16px" }}>Rp. 0</h6>

          <h6 className="lead-eight secondary-color">Total Pencairan</h6>
          <h6 className="heading-six secondary-color">Rp. 20.000</h6>
        </div>
      </div>
    </div>
  )
}

export default SaldoInfo