import React, { useState, useEffect } from "react";
import Navigation from './Nav';
import "../statics/css/sideMenu.css";

function SideMenu() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    // 스크롤 10% 감지
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight;
      const winHeight = document.documentElement.clientHeight;
      const scrollPercent = (scrollTop / (docHeight - winHeight)) * 100;

      setIsVisible(scrollPercent >= 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Footer 감지
    const targetElement = document.getElementById("footerTarget");
    if (!targetElement) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsHidden(entry.isIntersecting); // Footer가 보이면 숨김 처리
      },
      { threshold: 0.5 }
    );

    observer.observe(targetElement);
    return () => observer.unobserve(targetElement);
  }, []);

  return (
    <div className={`floating-menu ${isVisible && !isHidden ? "visible__menu" : "hidden__menu"}`}>
      <Navigation isFloatingMenu={true} />
    </div>
  );
}

export default SideMenu;
