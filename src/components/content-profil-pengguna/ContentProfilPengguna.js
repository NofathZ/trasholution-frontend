import "./ContentProfilPengguna.css"

const ContentProfilPengguna = (props) => {
  return (
    <div className="content-profil-box">
      <div className="menu-nav-profile">
        <button className="lead-six riwayat-btn-inactive">Saldo</button>
        <button className="lead-six main-color-bg riwayat-btn-active">Riwayat</button>
      </div>
      <div className="total-money-box main-color-bg">
        <div className="money-icon">
          <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.073 11.8515C14.4116 11.6258 14.8299 11.424 15.3125 11.2678L15.3125 14.9822C14.8299 14.826 14.4116 14.6242 14.073 14.3985C13.2765 13.8675 13.125 13.3742 13.125 13.125C13.125 12.8758 13.2765 12.3825 14.073 11.8515Z" fill="white" />
            <path d="M19.6875 23.7322L19.6875 20.0178C20.1701 20.174 20.5884 20.3758 20.927 20.6015C21.7235 21.1325 21.875 21.6259 21.875 21.875C21.875 22.1242 21.7235 22.6175 20.927 23.1485C20.5884 23.3742 20.1701 23.576 19.6875 23.7322Z" fill="white" />
            <path fillRule="evenodd" clipRule="evenodd" d="M17.5 35C27.165 35 35 27.165 35 17.5C35 7.83502 27.165 0 17.5 0C7.83502 0 0 7.83502 0 17.5C0 27.165 7.83502 35 17.5 35ZM19.6875 6.5625C19.6875 5.35438 18.7081 4.375 17.5 4.375C16.2919 4.375 15.3125 5.35438 15.3125 6.5625V6.76373C13.9528 7.01909 12.6951 7.51203 11.6462 8.2113C10.0675 9.26374 8.75 10.9579 8.75 13.125C8.75 15.2921 10.0675 16.9863 11.6462 18.0387C12.6951 18.738 13.9528 19.2309 15.3125 19.4863L15.3125 23.7327C14.4572 23.455 13.8232 23.0385 13.4677 22.6289C12.6759 21.7164 11.2943 21.6185 10.3819 22.4103C9.46936 23.2021 9.37149 24.5836 10.1633 25.4961C11.3937 26.9142 13.2553 27.8487 15.3125 28.2355L15.3125 28.4375C15.3125 29.6456 16.2918 30.625 17.5 30.625C18.7081 30.625 19.6875 29.6457 19.6875 28.4375L19.6875 28.2363C21.0473 27.9809 22.3049 27.488 23.3538 26.7887C24.9325 25.7363 26.25 24.0421 26.25 21.875C26.25 19.7079 24.9325 18.0137 23.3538 16.9613C22.3049 16.262 21.0473 15.7691 19.6875 15.5137L19.6875 11.2673C20.5428 11.545 21.1769 11.9615 21.5323 12.3711C22.3241 13.2836 23.7057 13.3815 24.6182 12.5897C25.5307 11.7979 25.6286 10.4164 24.8368 9.50386C23.6063 8.0858 21.7447 7.15127 19.6875 6.76453V6.5625Z" fill="white" />
          </svg>
        </div>
        <div className="total-money">
          <h3 className="lead-three" style={{ color: "white" }}>Rp. {props.dataPengguna.saldo}</h3>
        </div>
      </div>

      <div>
        <h6 className="lead-six secondary-color">Email</h6>
        <h6 className="heading-six main-color" style={{ paddingLeft: "38px", marginTop: "18px" }}>{props.dataPengguna.email}</h6>
        <div className="line-break-profile"></div>
        <h6 className="lead-six secondary-color">Alamat</h6>
        <h6 className="heading-six main-color" style={{ paddingLeft: "38px", marginTop: "18px" }}>{props.lokasi}</h6>
        <div className="line-break-profile"></div>
        <h6 className="lead-six secondary-color">Nomor Telepon</h6>
        <h6 className="heading-six main-color" style={{ paddingLeft: "38px", marginTop: "18px" }}>{props.dataPengguna.phone}</h6>
        <div className="line-break-profile"></div>
      </div>
    </div>
  )
}

export default ContentProfilPengguna