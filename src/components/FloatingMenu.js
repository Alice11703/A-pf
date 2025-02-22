import React, { useState, useEffect } from "react";
import Navigation from './Nav';
import "../statics/css/sideMenu.css";

function FloatingMenu() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollTop = window.scrollY;
          const docHeight = document.documentElement.scrollHeight;
          const winHeight = document.documentElement.clientHeight;
          const scrollPercent = (scrollTop / (docHeight - winHeight)) * 100;
          
          setIsVisible(scrollPercent >= 10);
          setIsHidden(scrollTop < lastScrollY && scrollTop > 100);
          
          lastScrollY = scrollTop;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div 
      className={`floating-menu ${isVisible ? (isHidden ? "hidden__menu" : "visible__menu") : ""}`}
      style={{
        top: `${Math.max(20, Math.min(window.innerHeight - 300, window.scrollY + 100))}px`
      }}
    >
      <Navigation isFloatingMenu={true} />
    </div>
  );
}

export default FloatingMenu;
