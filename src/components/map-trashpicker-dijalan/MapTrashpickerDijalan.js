import "./MapTrashpickerDijalan.css"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import { useState, useEffect } from "react"

const MapTrashpickerDijalan = (props) => {
  const [positionPengguna, setPositionPengguna] = useState(null)
  const [positionTrashpicker, setPositionTrashpicker] = useState(null)

  useEffect(() => {
    if (props.informasiMap) {
      setPositionPengguna([props.informasiMap.penjualan.lat_pengguna, props.informasiMap.penjualan.long_pengguna])
      setPositionTrashpicker([props.informasiMap.penjualan.lat_trashpicker, props.informasiMap.penjualan.long_trashpicker])
    }
    console.log(props.informasiMap.penjualan.lat_pengguna)
  }, [props.informasiMap])

  return (
    <div className="map-trashpicker-dijalan-box">
      {positionPengguna && positionTrashpicker ?
        <MapContainer center={positionPengguna} zoom={13} scrollWheelZoom={true} style={{ width: "100%", height: "100%", borderRadius: "20px" }}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={positionPengguna} draggable={"false"}>
            <Popup>
              Pengguna
            </Popup>
          </Marker>
          <Marker position={positionTrashpicker} draggable={"false"}>
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

export default MapTrashpickerDijalan