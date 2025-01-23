import React from 'react';
import { Link } from 'react-router-dom';

const Nav = ({ activeSection }) => {
    return (
        <>
            <div className="cont__nav">
                <a
                    href="#_about"
                    className={activeSection === '_about' ? 'active' : ''}
                >
                    About
                </a>
                <a
                    href="#_projects"
                    className={activeSection === '_projects' ? 'active' : ''}
                >
                    Projects
                </a>
                <a
                    href="#_career"
                    className={activeSection === '_career' ? 'active' : ''}
                >
                    Career
                </a>
                <Link
                    to="https://drive.google.com/file/d/1xe8YSs-a-UVjByjfnrqSWIxScdsByuBI/view?usp=drive_link"
                    target="_blank"
                >
                    
                </Link>
            </div>
        </>
    );
};

export default Nav;