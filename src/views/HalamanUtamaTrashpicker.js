import Layout from '../layout/Layout';
import HeadingTitle from '../components/heading-title/HeadingTitle';
import ThLogo from '../assets/th-logo.png'
import MenuBoxTrashpicker from '../components/menu-box-trashpicker/MenuBoxTrashpicker';
import "./HalamanUtamaTrashpicker.css"

const HalamanUtamaTrashpicker = () => {
  return (
    <Layout className="bg-halaman-utama-trashpicker">
      <HeadingTitle>
        <img src={ThLogo} alt="" />
        <div />
      </HeadingTitle>
      <div style={{ textAlign: "center", marginBottom: "56px" }}>
        <span className="lead-three main-color">Hallo </span>
        <span className="heading-three main-color">Trashpicker!</span>
      </div>
      <MenuBoxTrashpicker />
    </Layout>
  )
}

export default HalamanUtamaTrashpicker;
