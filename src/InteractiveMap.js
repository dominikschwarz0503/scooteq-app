import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "./InteractiveMap.css";
import ChangeMapView from "./ChangeMapView";
import ScooterIcon from "./ScooterIcon";
import scooterData from "./scooterLocations.json";

function InteractiveMap(props) {
  const [renting, setRentingStatus] = useState(false);

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

  const position = [51.490400215903314, 0.01041623824307836];

  const setRentStatus = () => {
    setRentingStatus(true);
    props.startTimer();
  };

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
        {scooterData.scooterLocations.map((scooter, index) => (
          <ScooterIcon
            key={index}
            name={scooter.name}
            latitude={scooter.location.latitude}
            longitude={scooter.location.longitude}
            isFree={scooter.isFree}
            setRenting={setRentStatus}
          />
        ))}

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
