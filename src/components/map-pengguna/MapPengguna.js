import "./MapPengguna.css"

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"

const MapPengguna = () => {

  // 1. Butuh info pengguna
  // 2. Butuh lokasi pengguna
  // 3. Butuh informasi data sampah pengguna

  const position = [51.505, -0.09]

  return (
    <div className="map-box">
      <MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{ width: "100%", height: "100%", borderRadius: "20px" }}>
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

export default MapPengguna