import React, { Component } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "./InteractiveMap.css";

const position = [53.4997496605889, 10.002777094191392];

class InteractiveMap extends Component {
  render() {
    return (
      <div className="Map-container">
        <MapContainer
          center={position}
          zoom={17}
          scrollWheelZoom={false}
          className="Map"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[53.49980770255701, 10.002337639029264]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    );
  }
}

export default InteractiveMap;
