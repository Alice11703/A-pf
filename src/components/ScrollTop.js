import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

const ScrollTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const updateScrollTop = () => {
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            // 스크롤이 100px 이상일 때 버튼 표시
            setIsVisible(scrollTop > 100);
        };

        // 초기 상태 체크
        updateScrollTop();

        window.addEventListener('scroll', updateScrollTop);
        return () => window.removeEventListener('scroll', updateScrollTop);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div className={`scroll__container ${isVisible ? 'visible' : ''}`}>
            <button
                id="top"
                onClick={scrollToTop}
                aria-label="Scroll to top"
            >
                Top
            </button>
        </div>
    );
};

export default ScrollTop; 