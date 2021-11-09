import { useEffect } from "react/cjs/react.development"
import "./BoxDaftarSampah.css"
import JenisSampah from "./JenisSampah"

const BoxDaftarSampah = (props) => {
  useEffect(() => {
    // console.log(props.dataSampah)
    // console.log("Box daftar")
  }, [props.dataSampah])
  return (
    <div className="box-daftar-sampah main-color-bg">
      <div className="jenis-sampah">

        <JenisSampah dataSampah={props.dataSampah} />

        
      </div>


    </div>
  )
}

export default BoxDaftarSampah