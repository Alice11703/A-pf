import React, { useState, useEffect } from "react";
import "../statics/css/colorTheme.css";

function DarkModeToggle() {
  // ✅ 기본값을 다크모드로 설정
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");

    if (savedMode === "enabled" || savedMode === null) {
      setDarkMode(true);
      document.body.classList.add("dark-mode");
    } else {
      setDarkMode(false);
      document.body.classList.remove("dark-mode");
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;

      if (newMode) {
        document.body.classList.add("dark-mode");
        localStorage.setItem("darkMode", "enabled");
      } else {
        document.body.classList.remove("dark-mode");
        localStorage.setItem("darkMode", "disabled");
      }

      return newMode;
    });
  };

  return (
    <button onClick={toggleDarkMode} className="toggle-btn">
      {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
    </button>
  );
}

export default DarkModeToggle;
