import React from 'react';
import LayoutFixed from '../layout/LayoutFixed';
import HeadingTitle from '../components/heading-title/HeadingTitle';
import "./ProfilPengguna.css"
import ContentProfilTrashpicker from '../components/content-profil-trashpicker/ContentProfilTrashpicker';

const ProfilTrashpicker = () => {
  return (
    <LayoutFixed className="outer-padding-profil-pengguna">
      <div className="container-profil-pengguna">
        <HeadingTitle>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 19L8 12L15 5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <div></div>
        </HeadingTitle>
        <img className="img-user" />
        <h3 className="heading-three" style={{ color: "white", textAlign: "center" }}>alfonsus marlina</h3>
        <ContentProfilTrashpicker />
      </div>
    </LayoutFixed>
  )
}

export default ProfilTrashpicker;
