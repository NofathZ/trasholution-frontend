import "./MapTrashpicker.css"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import { useState, useEffect } from "react"

const MapTrashpicker = (props) => {

  const [positionPengguna] = useState([props.dataLokasi.lat_pengguna, props.dataLokasi.long_pengguna])
  const [positionTrashpicker] = useState([props.dataLokasi.lat_trashpicker, props.dataLokasi.long_trashpicker])

  return (
    <div className="map-trashpicker-box">
      {positionPengguna && positionTrashpicker ?
        <MapContainer center={positionTrashpicker} zoom={13} scrollWheelZoom={true} style={{ width: "100%", height: "100%", borderRadius: "20px" }}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={positionTrashpicker} draggable={false}>
            <Popup>
              Trashpicker
            </Popup>
          </Marker>
          <Marker position={positionPengguna} draggable={false}>
            <Popup>
              You
            </Popup>
          </Marker>
        </MapContainer>
        : ""
      }
    </div>
  )
}

export default MapTrashpicker