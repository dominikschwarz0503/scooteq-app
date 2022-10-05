import React from "react";
import { useState } from "react";
import Account from "../Account/Account";
import Navbar from "../Navbar/Navbar";
import Renting from "../Renting/Renting";
export default function MainScreenMapView() {

    const [accountPageOpen, setIsAccountPageOpen] = useState(false);

    const toggleAccountMenu = () => {
        setIsAccountPageOpen(isToggled => !isToggled)
    }

    return (
        <>
            <Navbar toggleAccountMenu={toggleAccountMenu} />
            {(accountPageOpen && <Account />) ||
                (!accountPageOpen && <Renting />)}
        </>
    );
}
