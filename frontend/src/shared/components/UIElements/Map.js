import React, { useEffect, useRef, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import markerShadowPng from "leaflet/dist/images/marker-shadow.png";

import "leaflet/dist/leaflet.css";
import "./Map.css";

const Map = ({ coordinates, ...props }) => {
  const mapRef = useRef();

  const [currentPosition, setCurrentPosition] = useState([
    coordinates.lat,
    coordinates.lng,
  ]);

  const defaultIcon = L.icon({
    iconUrl: markerIconPng,
    shadowUrl: markerShadowPng,
    iconAnchor: [12, 41],
  });

  useEffect(() => {
    const position = [coordinates.lat, coordinates.lng];
    setCurrentPosition(position);
    if (mapRef.current) {
      mapRef.current.setView(position, mapRef.current.getZoom());
    }
  }, [coordinates]);

  return (
    <div className={`map ${props.className}`} style={props.style}>
      <MapContainer
        center={currentPosition}
        zoom={props.zoom}
        style={props.mapStyle}
        whenCreated={(mapInstance) => mapRef.current = mapInstance}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={currentPosition} icon={defaultIcon}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
