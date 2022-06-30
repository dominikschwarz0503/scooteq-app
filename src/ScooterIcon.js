import { Marker, Popup } from "react-leaflet";
import L from "leaflet";
import greenIcon from "./scooter-icon-green.svg";
import redIcon from "./scooter-icon-red.svg";
import { Component } from "react";

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

class ScooterIcon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isRenting: false,
    };

    this.rentScooter = this.rentScooter.bind(this);
  }

  rentScooter(e) {
    e.stopPropagation();
    this.setState({ isRenting: true });
    this.props.setRenting();
  }

  render() {
    return (
      <Marker
        position={[this.props.latitude, this.props.longitude]}
        icon={
          this.props.isFree && !this.state.isRenting
            ? greenScooterIcon
            : redScooterIcon
        }
      >
        <Popup>
          <h4 style={{ margin: 0 }}>{this.props.name}</h4>
          <p style={{ marginTop: "0.5rem" }}>
            This Scooter is{" "}
            {this.props.isFree && !this.state.isRenting
              ? "free!"
              : " occupied!"}
            {this.props.isFree && !this.state.isRenting && (
              <a onClick={this.rentScooter} style={{ cursor: "pointer" }}>
                {" "}
                rent it
              </a>
            )}
          </p>
        </Popup>
      </Marker>
    );
  }
}

export default ScooterIcon;
