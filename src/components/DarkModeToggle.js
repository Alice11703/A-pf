import { memo, useState, useEffect } from 'react';
import "../statics/css/colorTheme.css";

const DarkModeToggle = memo(() => {
    const [isDark, setIsDark] = useState(() => {
        const savedTheme = localStorage.getItem("theme");
        return savedTheme ? savedTheme === "dark" : false;
    });

    useEffect(() => {
        const root = document.documentElement;
        root.setAttribute("data-theme", isDark ? "dark" : "light");
        localStorage.setItem("theme", isDark ? "dark" : "light");
    }, [isDark]);

    return (
        <button 
            onClick={() => setIsDark(!isDark)} 
            className="toggle-btn darkmode-toggle"
            aria-label={isDark ? "라이트 모드로 전환" : "다크 모드로 전환"}
        >
            <span className="toggle-icon">{isDark ? "☀️" : "🌙"}</span>
            <span className="toggle-text">{isDark ? "Light Mode" : "Dark Mode"}</span>
        </button>
    );
});

export default DarkModeToggle;
