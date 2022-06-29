import React, { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer, Tooltip } from "react-leaflet";
import "./InteractiveMap.css";
import ChangeMapView from "./ChangeMapView";
import L from "leaflet";
import greenIcon from "./scooter-icon-green.svg";
import redIcon from "./scooter-icon-red.svg";

function InteractiveMap() {
  const [userLocation, setUserLocation] = useState({
    loaded: false,
    coordinates: { latitude: "", longitude: "" },
    error: "ERROR!",
  });

  const onSuccess = (location) => {
    setUserLocation({
      loaded: true,
      coordinates: {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      },
    });
  };

  const onError = (error) => {
    setUserLocation({
      loaded: true,
      error,
    });
  };

  useEffect(() => {
    if (!navigator.geolocation) {
      onError({
        code: 0,
        message: "Geolocation not supported in this browser!",
      });
    }

    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  }, []);

  //Green icon for available scooter
  const greenScooterIcon = new L.Icon({
    iconUrl: greenIcon,
    iconRetinaUrl: greenIcon,
    popupAnchor: [-0, -0],
    iconSize: [32, 45],
  });

  //Red icon for occupied scooter
  const redScooterIcon = new L.Icon({
    iconUrl: redIcon,
    iconRetinaUrl: redIcon,
    popupAnchor: [-0, -0],
    iconSize: [32, 45],
  });

  const position = [51.490400215903314, 0.01041623824307836];

  return (
    <div className="Map-container">
      <MapContainer
        center={position}
        zoom={13}
        scrollWheelZoom={false}
        className="Map"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker
          position={[54.133708600794535, 12.059956823691344]}
          icon={greenScooterIcon}
        >
          <Popup>
            This scooter is available! <a href="#">Rent it</a>
          </Popup>
        </Marker>
        <Marker
          position={[54.139169451041006, 12.053405492377959]}
          icon={redScooterIcon}
        >
          <Popup>This scooter is occupied</Popup>
        </Marker>
        {userLocation.loaded && !userLocation.error && (
          <ChangeMapView
            coords={[
              userLocation.coordinates.latitude,
              userLocation.coordinates.longitude,
            ]}
          />
        )}
      </MapContainer>
    </div>
  );
}

export default InteractiveMap;
