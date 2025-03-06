import React, { useState, useEffect } from "react";
import "../statics/css/colorTheme.css";

function DarkModeToggle() {
    const [isDark, setIsDark] = useState(() => {
        const savedTheme = localStorage.getItem("theme");
        return savedTheme === "dark" || (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches);
    });

    useEffect(() => {
        const root = document.documentElement;
        root.setAttribute("data-theme", isDark ? "dark" : "light");
        localStorage.setItem("theme", isDark ? "dark" : "light");
    }, [isDark]);

    const toggleTheme = () => {
        setIsDark(prev => !prev);
    };

    return (
        <button 
            onClick={toggleTheme} 
            className="toggle-btn"
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
        >
            <span className="toggle-icon">{isDark ? "☀️" : "🌙"}</span>
            <span className="toggle-text">{isDark ? "Light Mode" : "Dark Mode"}</span>
        </button>
    );
}

export default DarkModeToggle;
