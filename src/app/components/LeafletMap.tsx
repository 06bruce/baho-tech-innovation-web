import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix marker icon issue in Leaflet
const DefaultIcon = L.icon({
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});
L.Marker.prototype.setIcon(DefaultIcon);

export function LeafletMap() {
  // Kigali, Rwanda coordinates
  const position = [-1.9505, 30.0605] as [number, number];

  return (
    <MapContainer
      center={position}
      zoom={15}
      style={{ width: '100%', height: '100%' }}
      className="rounded-2xl"
    >
      {/* OpenStreetMap Tile Layer */}
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      
      {/* Marker for Norrsken House */}
      <Marker position={position}>
        <Popup>
          <div className="text-center">
            <p className="font-bold text-lg text-[#1A4F8D]">Norrsken House Kigali</p>
            <p className="text-gray-700">1 KN 78 St</p>
            <p className="text-gray-700">Kigali, Rwanda</p>
            <p className="text-sm text-gray-500 mt-2">📍 -1.9505, 30.0605</p>
          </div>
        </Popup>
      </Marker>
    </MapContainer>
  );
}
