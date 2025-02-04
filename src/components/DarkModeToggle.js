import React, { useState, useEffect } from "react";
import "../statics/css/colorTheme.css";

function DarkModeToggle() {
  // 다크모드 상태 관리
  const [darkMode, setDarkMode] = useState(false);

  // 컴포넌트가 처음 렌더링될 때 localStorage에서 다크모드 설정을 확인
  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode === "enabled") {
      setDarkMode(true);
      document.body.classList.add("dark-mode");
    }
  }, []);

  // 다크모드 토글 함수
  const toggleDarkMode = () => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      
      // body에 클래스 추가/제거
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
