import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Nav';

const Header = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const [activeSection, setActiveSection] = useState('');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        }
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        if (width > 780) {
            setIsMenuOpen(false);
        }
    }, [width]);

    const handleSideNavToggle = () => {
        setIsMenuOpen((prev) => !prev);
    };

    useEffect(() => {
        const sections = document.querySelectorAll('section');

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {
                root: null,
                threshold: 0.6,
            }
        );

        sections.forEach((section) => observer.observe(section));
        return () => observer.disconnect();
    }, []);

    return (
        <header className={`header ${activeSection}`}>
            <nav>
                <div className="btn__home">
                    <Link to="/">KE.</Link>
                </div>

                {width > 780 && <Navigation activeSection={activeSection} isFloatingMenu={false} />}
                {width < 780 && (
                    <div className="cont__nav">
                        <button className="btn__menubar" onClick={handleSideNavToggle}></button>
                        <div className={`cont__menu ${isMenuOpen ? "open" : "closed"}`}>
                            <Navigation
                                activeSection={activeSection}
                                isFloatingMenu={false}
                                closeMenu={() => setIsMenuOpen(false)}
                            />
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Header;
