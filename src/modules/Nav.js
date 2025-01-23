import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <>
            {/* <div>
                        <SettingToggle /> <label for="toggleBtn"></label>
                    </div> */}
            {/* <div>
                <Link to="/">KE.</Link>
            </div> */}
            <div className="cont__nav">
                <a href="#_about">About</a>
                <a href="#_projects">Projects</a>
                <a href="#_career">Career</a>
                <Link to="https://drive.google.com/file/d/1xe8YSs-a-UVjByjfnrqSWIxScdsByuBI/view?usp=drive_link" target="_blank"></Link>
            </div>
        </>
    );
}

export default Nav;