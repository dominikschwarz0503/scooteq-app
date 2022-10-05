import React from 'react'
import profileIcon from "../../img/profile-icon.svg";
import "./Navbar.css";

export default function Navbar(props) {

    const toggleAccountMenu = () => {
        props.toggleAccountMenu();
    }

    return (
        <nav className="navbar">
            <img src={profileIcon} alt="profile-icon" onClick={() => toggleAccountMenu(open => !open)} />
        </nav>
    )
}
