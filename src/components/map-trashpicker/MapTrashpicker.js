import "./MapTrashpicker.css"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"

const MapTrashpicker = (props) => {
  // 1. Butuh API info trashpicker
  // 2. Butuh API untuk mendapat lokasi trashpicker

  const position = [51.505, -0.09]

  return (
    <div className="map-trashpicker-box">
      <MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{width:"100%", height:"100%", borderRadius:"20px"}}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  )
}

export default MapTrashpicker