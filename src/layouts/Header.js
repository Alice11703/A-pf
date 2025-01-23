import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../modules/Nav';
import '../statics/css/header.css';

const Header = (props) => {
    const [width, setWidth] = useState(window.innerWidth);
    const [activeSection, setActiveSection] = useState(''); // 현재 활성화된 섹션

    // 화면 크기 감지
    useEffect(() => {
        function handleResize() {
            setWidth(window.innerWidth);
        }
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [width]);

    // 특정 화면 너비 이하에서 사이드 내비게이션 처리
    useEffect(() => {
        if (width < 780) {
            handleSideNavToggle();
        }
    }, [width]);

    function handleSideNavToggle() {
        // 사이드 내비게이션 토글 로직
    }

    // 활성 섹션 관리 (IntersectionObserver)
    useEffect(() => {
        const sections = document.querySelectorAll('section');

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id); // 보이는 섹션 ID 설정
                    }
                });
            },
            {
                root: null, // 뷰포트를 기준으로 감지
                threshold: 0.6, // 60% 이상 보이면 활성화된 것으로 간주
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
                {width > 780 && (
                    <Navigation activeSection={activeSection} /> // Navigation에 활성 섹션 전달
                )}
                {width < 780 && (
                    <div className="cont__nav">
                        <button className="btn__menubar"></button>
                        <div className="cont__menu">
                            <Navigation activeSection={activeSection} />
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Header;

