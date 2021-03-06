import ButtonMenu from "../button/ButtonMenu"
import { Link } from "react-router-dom"
import API from "../../api/api"

const MenuBoxTrashpicker = (props) => {

  const token = localStorage.getItem("token")

  const logout = async () => {
    if (localStorage.getItem('token')) {
      localStorage.removeItem('token')
      localStorage.removeItem('role')
      localStorage.removeItem('nama')
      window.location.reload('/')

      await API.get('/api/t/update-status/offline', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
    }
  }
  
  return (
    <div className="menu-box">
      <ButtonMenu title="Profil" colorStatus="main-color-bg">
        <Link style={{ textDecoration: "none" }} to={'/trashpicker/profil-trashpicker'}>
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M39.2 20C39.2 30.6039 30.6039 39.2 20 39.2C9.39618 39.2 0.800049 30.6039 0.800049 20C0.800049 9.39614 9.39618 0.800003 20 0.800003C30.6039 0.800003 39.2 9.39614 39.2 20ZM24.8 12.8C24.8 15.451 22.651 17.6 20 17.6C17.3491 17.6 15.2 15.451 15.2 12.8C15.2 10.149 17.3491 8 20 8C22.651 8 24.8 10.149 24.8 12.8ZM19.9999 22.4C15.1578 22.4 10.9855 25.2679 9.08901 29.3977C11.7297 32.4609 15.6384 34.4 20 34.4C24.3615 34.4 28.2701 32.461 30.9108 29.3979C29.0144 25.268 24.8421 22.4 19.9999 22.4Z" fill="white" />
          </svg>
        </Link>
      </ButtonMenu>
      {/* <ButtonMenu colorStatus={props.status ? "main-color-bg" : "secondary-color-bg"} title="Validasi Sampah">
        <Link style={{ textDecoration: "none" }} to={props.status ? '/trashpicker/detail-validasi' : ''}>
          <svg width="39" height="41" viewBox="0 0 39 41" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.04995 0.350006C1.75208 0.350006 0.699951 1.40214 0.699951 2.70001C0.699951 3.99787 1.75208 5.05001 3.04995 5.05001H5.91513L6.63319 7.92228C6.64073 7.95549 6.64897 7.98843 6.6579 8.02109L9.84739 20.7791L7.74984 22.8766C4.78901 25.8374 6.88598 30.9 11.0732 30.9H31.2498C32.5477 30.9 33.5998 29.8479 33.5998 28.55C33.5998 27.2521 32.5477 26.2 31.2498 26.2L11.0732 26.2L13.4232 23.85H28.9C29.7901 23.85 30.6038 23.3471 31.0019 22.551L38.0519 8.45096C38.4161 7.72249 38.3772 6.85736 37.949 6.16454C37.5208 5.47172 36.7644 5.05001 35.95 5.05001H10.7598L10.0298 2.13005C9.76825 1.0839 8.82829 0.350006 7.74995 0.350006H3.04995Z" fill="white" />
            <path d="M33.6 36.775C33.6 38.7218 32.0218 40.3 30.075 40.3C28.1281 40.3 26.55 38.7218 26.55 36.775C26.55 34.8282 28.1281 33.25 30.075 33.25C32.0218 33.25 33.6 34.8282 33.6 36.775Z" fill="white" />
            <path d="M11.275 40.3C13.2218 40.3 14.8 38.7218 14.8 36.775C14.8 34.8282 13.2218 33.25 11.275 33.25C9.32815 33.25 7.74995 34.8282 7.74995 36.775C7.74995 38.7218 9.32815 40.3 11.275 40.3Z" fill="white" />
          </svg>
        </Link>
      </ButtonMenu> */}
      <ButtonMenu colorStatus={props.status ? "main-color-bg" : "secondary-color-bg"} title="Permintaan Penjemputan">
        <Link style={{ textDecoration: "none" }} to={props.status ? '/trashpicker/jemput-sampah' : ''}>
          <svg width="53" height="46" viewBox="0 0 53 46" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 40.625C20 43.3174 17.8174 45.5 15.125 45.5C12.4326 45.5 10.25 43.3174 10.25 40.625C10.25 37.9326 12.4326 35.75 15.125 35.75C17.8174 35.75 20 37.9326 20 40.625Z" fill="white" />
            <path d="M42.75 40.625C42.75 43.3174 40.5674 45.5 37.875 45.5C35.1826 45.5 33 43.3174 33 40.625C33 37.9326 35.1826 35.75 37.875 35.75C40.5674 35.75 42.75 37.9326 42.75 40.625Z" fill="white" />
            <path d="M3.75 0C1.95507 0 0.5 1.45507 0.5 3.25V35.75C0.5 37.5449 1.95507 39 3.75 39H7.16253C7.91534 35.2914 11.1942 32.5 15.125 32.5C19.0558 32.5 22.3347 35.2914 23.0875 39H26.5C28.2949 39 29.75 37.5449 29.75 35.75V3.25C29.75 1.45507 28.2949 0 26.5 0H3.75Z" fill="white" />
            <path d="M39.5 9.75C37.7051 9.75 36.25 11.2051 36.25 13V32.6625C36.7751 32.5559 37.3185 32.5 37.875 32.5C41.8058 32.5 45.0847 35.2914 45.8375 39H49.25C51.0449 39 52.5 37.5449 52.5 35.75V19.5C52.5 18.638 52.1576 17.8114 51.5481 17.2019L45.0481 10.7019C44.4386 10.0924 43.612 9.75 42.75 9.75H39.5Z" fill="white" />
          </svg>
        </Link>
      </ButtonMenu>
      <ButtonMenu title="Logout" colorStatus="main-color-bg" onClick={logout}>
        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M49.5 25C49.5 38.531 38.531 49.5 25 49.5C11.469 49.5 0.5 38.531 0.5 25C0.5 11.469 11.469 0.5 25 0.5C38.531 0.5 49.5 11.469 49.5 25ZM21.3133 16.1867C19.8976 14.7711 17.6024 14.7711 16.1867 16.1867C14.7711 17.6024 14.7711 19.8976 16.1867 21.3133L19.8735 25L16.1867 28.6867C14.7711 30.1024 14.7711 32.3976 16.1867 33.8133C17.6024 35.2289 19.8976 35.2289 21.3133 33.8133L25 30.1265L28.6867 33.8133C30.1024 35.2289 32.3976 35.2289 33.8133 33.8133C35.2289 32.3976 35.2289 30.1024 33.8133 28.6867L30.1265 25L33.8133 21.3133C35.2289 19.8976 35.2289 17.6024 33.8133 16.1867C32.3976 14.7711 30.1024 14.7711 28.6867 16.1867L25 19.8735L21.3133 16.1867Z" fill="white" stroke="white" />
        </svg>
      </ButtonMenu>
    </div>
  )
}

export default MenuBoxTrashpicker