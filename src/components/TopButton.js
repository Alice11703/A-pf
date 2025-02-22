import React, { useState, useEffect } from "react";

const TopButton = () => {
    const [showButton, setShowButton] = useState(false);
  
    const scrollToTop = () => {
      window.scroll({ top: 0, behavior: 'smooth' });
    }

    useEffect(() => {
      const handleShowButton = () => {
        setShowButton(window.scrollY > 300);
      }
  
      window.addEventListener("scroll", handleShowButton);
      return () => {
        window.removeEventListener("scroll", handleShowButton);
      }
    }, []);
  
    return showButton && (
      <div className="scroll__container">
        <button id="top" className="unselectable" onClick={scrollToTop} type="button">Top</button>
      </div>
    );
}

export default TopButton;