import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const center = [22.9734, 78.6569];
const zoom = 5;

const Map = () => {
  return (
    <div style={{ height: "400px", width: "100%" }}>
      <MapContainer
        center={center}
        zoom={zoom}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        <Marker position={center}>
          <Popup>
            Madhya Pradesh, a state in India.
            <br />
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
