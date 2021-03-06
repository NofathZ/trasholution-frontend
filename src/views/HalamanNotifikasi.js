import { Link } from "react-router-dom"
import Layout from "../layout/Layout"
import "./HalamanNotifikasi.css"

const HalamanNotifikasi = () => {
  return (
    <Layout className="notification-page-bg">
      <div className="notifikasi-wrapper">
        <svg width="98" height="98" viewBox="0 0 98 98" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M49 88.1998C70.6495 88.1998 88.2 70.6494 88.2 48.9998C88.2 27.3502 70.6495 9.7998 49 9.7998C27.3504 9.7998 9.79999 27.3502 9.79999 48.9998C9.79999 70.6494 27.3504 88.1998 49 88.1998ZM67.1648 42.6646C69.0784 40.7511 69.0784 37.6485 67.1648 35.735C65.2512 33.8214 62.1487 33.8214 60.2352 35.735L44.1 51.8702L37.7648 45.535C35.8512 43.6214 32.7487 43.6214 30.8352 45.535C28.9216 47.4485 28.9216 50.5511 30.8352 52.4646L40.6352 62.2646C42.5487 64.1782 45.6512 64.1782 47.5648 62.2646L67.1648 42.6646Z" fill="#35BE80" />
        </svg>
        <h2 className="heading-two main-color" style={{ textAlign: "center" }}>Selamat Penjualan Sampah Berhasil</h2>
        <Link to="/" style={{ textDecoration: "none" }}>
          <button className="btn-notifikasi-redirect-halaman">Kembali Halaman Utama</button>
        </Link>
      </div>
    </Layout>
  )
}

export default HalamanNotifikasi