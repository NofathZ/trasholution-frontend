import "./MapTrashpickerDijalan.css"
import { MapContainer, TileLayer, Marker } from "react-leaflet"
import { useState, useEffect } from "react"

const MapTrashpickerDijalan = (props) => {
  const [position, setPosition] = useState(null)

  useEffect(() => {
    if (props.informasiPengguna) {
      setPosition([props.informasiPengguna.lat, props.informasiPengguna.long])
    }
  }, [props.informasiPengguna])

  return (
    <div className="map-trashpicker-dijalan-box">
      {position ?
        <MapContainer center={position} zoom={13} scrollWheelZoom={true} style={{ width: "100%", height: "100%", borderRadius: "20px" }}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position} draggable={"true"}></Marker>
        </MapContainer>
        : ""
      }
    </div>
  )
}

export default MapTrashpickerDijalan