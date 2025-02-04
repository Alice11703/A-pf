import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Nav';

const Header = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const [activeSection, setActiveSection] = useState('');
    const [isMenuOpen, setIsMenuOpen] = useState(false); // 메뉴 상태 추가

    // 화면 크기 감지
    useEffect(() => {
        function handleResize() {
            setWidth(window.innerWidth);
        }
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // 특정 화면 너비 이하에서 사이드 내비게이션 초기 상태 설정
    useEffect(() => {
        if (width > 780) {
            setIsMenuOpen(false); // 데스크탑에서는 항상 닫힘
        }
    }, [width]);

    // 사이드 내비게이션 토글 함수
    const handleSideNavToggle = () => {
        setIsMenuOpen((prev) => !prev);
    };

    // 활성 섹션 관리 (IntersectionObserver)
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

                {/* 데스크탑 메뉴 */}
                {width > 780 && <Navigation activeSection={activeSection} isFloatingMenu={false} />}

                {/* 모바일 메뉴 */}
                {width < 780 && (
                    <div className="cont__nav">
                        <button className="btn__menubar" onClick={handleSideNavToggle}></button>
                        <div className={`cont__menu ${isMenuOpen ? "open" : "closed"}`}>
                            <Navigation
                                activeSection={activeSection}
                                isFloatingMenu={false}
                                closeMenu={() => setIsMenuOpen(false)} // 닫기 함수 전달
                            />
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Header;
