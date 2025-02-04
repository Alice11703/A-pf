import React from "react";

const today = new Date();
const year = today.getFullYear();
const currentDate = year;

const Footer = () => {
    return (
        <footer id="footerTarget">
            Copyright {currentDate}. Kim Koeun All Rights Reserved.
        </footer>
    );

}

export default Footer;

