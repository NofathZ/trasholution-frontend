import "./ProfilPengguna.css"
import LayoutFixed from '../layout/LayoutFixed'
import HeadingTitle from "../components/heading-title/HeadingTitle"
import ContentProfilPengguna from "../components/content-profil-pengguna/ContentProfilPengguna"

const ProfilPengguna = () => {
  return (
    <LayoutFixed className="outer-padding-profil-pengguna">
      <div className="container-profil-pengguna">
        <HeadingTitle>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 19L8 12L15 5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          <div></div>
        </HeadingTitle>
        <img className="img-user" />
        <h3 className="heading-three" style={{ color: "white", textAlign: "center" }}>alfonsus marlina</h3>
        <ContentProfilPengguna />
      </div>
    </LayoutFixed>
  )
}

export default ProfilPengguna;
