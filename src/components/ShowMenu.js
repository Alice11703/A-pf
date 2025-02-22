import React, { useState, useEffect } from "react";

const ShowMenu = () => {
    const [showMenu, setShowMenu] = useState(false);
  
    useEffect(() => {
      const handleShowMenu = () => {
        setShowMenu(window.innerWidth < 780);
      }
  
      window.addEventListener("click", handleShowMenu);
      return () => {
        window.removeEventListener("click", handleShowMenu);
      }
    }, []);
  
    return showMenu && (
      <div className="scroll__container">
        <button id="top" className="unselectable" onClick={ShowMenu} type="button">Top</button>
      </div>
    );
}

export default ShowMenu;