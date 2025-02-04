import React from 'react';
import DarkModeToggle from './DarkModeToggle';

const Nav = ({ activeSection, isFloatingMenu, closeMenu }) => {
    return (
        <>
            <div className="nav__list">
                {/* isFloatingMenu가 아닐 때만 닫기 버튼 표시 */}
                {!isFloatingMenu && (
                    <button className="btn__close unselectable" onClick={closeMenu}>
                        X
                    </button>
                )}
                <a href="#about" className={activeSection === "about" ? "active" : ""}>
                    <span className="ico__dot"> </span>
                    <span className="title__name">About</span>
                </a>
                <a href="#projects" className={activeSection === "projects" ? "active" : ""}>
                    <span className="ico__dot"> </span>
                    <span className="title__name">Projects</span>
                </a>
                <a href="#career" className={activeSection === "career" ? "active" : ""}>
                    <span className="ico__dot"> </span>
                    <span className="title__name">Career</span>
                </a>
            </div>
            <div className="btn__mode unselectable">
                {!isFloatingMenu && <DarkModeToggle />}
            </div>
        </>
    );
};

export default Nav;
