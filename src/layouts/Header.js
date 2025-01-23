import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import SettingToggle from '../statics/scripts/SettingToggle'
// import { Button } from "@mui/material";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faEye } from '@awesome.me/kit-2153d98071/icons/classic/solid'
import '../statics/css/header.css';
import Navigation from "../modules/Nav";
// import Menubars from '../statics/images/bars-solid.png';

const Header = (props) => {

    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        function handleResize() {
            setWidth(window.innerWidth);
        }
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [width]);

    useEffect(() => {
        width < 780 && handleSideNavToggle();
    }, [width]);

    function handleSideNavToggle() {
        <>
        </>
    }

    return (
        <header>
            <nav>
                <div className="btn__home">
                    <Link to="/">KE.</Link>
                </div>
                {width > 780 && (
                    <Navigation />
                )}
                {width < 780 && (
                    <div className="cont__nav">
                        <button className="btn__menubar"></button>
                        <div className="cont__menu"><Navigation /></div>
                        {/* <FontAwesomeIcon icon={faEye} /> */}
                    </div>
                )}
            </nav>
        </header>
    )
}

export default Header;

