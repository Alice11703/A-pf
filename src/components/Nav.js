import React from 'react';
import DarkModeToggle from './DarkModeToggle';

const Nav = ({ activeSection, isFloatingMenu, closeMenu }) => {
    const handleClick = (e) => {
        if (closeMenu) {
            e.preventDefault();
            const href = e.currentTarget.getAttribute('href');
            const element = document.querySelector(href);
            if (element) {
                element.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
                closeMenu();
            }
        }
    };

    const getNavItemClass = (section) => {
        let className = isFloatingMenu ? 'floating-nav-item' : 'nav-item';
        if (activeSection === section) {
            className += ' active';
        }
        return className;
    };

    return (
        <>
            <div className={`nav__list ${isFloatingMenu ? 'floating' : ''}`}>
                {!isFloatingMenu && (
                    <button className="btn__close" onClick={closeMenu} aria-label="Close menu">
                        <span>×</span>
                    </button>
                )}
                <a href="#about" 
                   className={getNavItemClass("about")}
                   onClick={handleClick}
                >
                    <span className="ico__dot"></span>
                    <span className={`title__name ${isFloatingMenu ? 'floating' : ''}`}>About</span>
                </a>
                <a href="#projects" 
                   className={getNavItemClass("projects")}
                   onClick={handleClick}
                >
                    <span className="ico__dot"></span>
                    <span className={`title__name ${isFloatingMenu ? 'floating' : ''}`}>Projects</span>
                </a>
                <a href="#career" 
                   className={getNavItemClass("career")}
                   onClick={handleClick}
                >
                    <span className="ico__dot"></span>
                    <span className={`title__name ${isFloatingMenu ? 'floating' : ''}`}>Career</span>
                </a>
            </div>
            <div className="btn__mode">
                {!isFloatingMenu && <DarkModeToggle />}
            </div>
        </>
    );
};

export default Nav;
