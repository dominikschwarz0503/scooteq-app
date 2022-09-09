import { forwardRef } from "react";
import { useImperativeHandle } from "react";
import { useState } from "react";
import { BottomSheet } from "react-spring-bottom-sheet";

import ScooterIconLg from "./scooter-icon-lg.png";
import "./ScooterDetailSlide.css";

// if setting up the CSS is tricky, you can add this to your page somewhere:
// <link rel="stylesheet" href="https://unpkg.com/react-spring-bottom-sheet/dist/style.css" crossorigin="anonymous">
import "react-spring-bottom-sheet/dist/style.css";

function ScooterDetailSlidePrototype(props, ref) {
    const [open, setOpen] = useState(false);

    useImperativeHandle(
        ref,
        () => ({
            openSheet() {
                setOpen(true);
            },
        }),
        []
    );

    const handleClick = () => {
        props.startTimer();
        setOpen(false);
    };

    return (
        <>
            <BottomSheet
                open={open}
                onDismiss={() => setOpen(false)}
                maxHeight={700}
                snapPoints={({ minHeight, maxHeight }) => [minHeight * 1.1]}
            >
                <div className="ScooterDetailSlide-container">
                    <h1>ScooTeq MAX G30D</h1>
                    <img src={ScooterIconLg} alt="Scooter Icon large" />
                    <ul className="ScooterDetailSlide-list">
                        <li>Max. Reichweite: 65 km</li>
                        <li>Motorleistung: 350W</li>
                        <li>Reifen: 10'' schlauchlose Luftreifen</li>
                        <li>Max. Traglast: 100 kg</li>
                        <li>Gewicht: 19,9 kg</li>
                    </ul>
                    <button onClick={() => handleClick()}>Rent it</button>
                </div>
            </BottomSheet>
        </>
    );
}

export default forwardRef(ScooterDetailSlidePrototype);
