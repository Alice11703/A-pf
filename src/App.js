// eslint-disable-next-line no-unused-vars
import React, { createContext, useState, useEffect } from "react";
import Header from './layouts/Header';
import Main from './layouts/Main';
import Footer from './layouts/Footer';
import Section from './layouts/pages/Section';
import ScrollTop from './components/ScrollTop';

export const ThemeContext = createContext();

function App() {
  const [activeSection, setActiveSection] = useState("");
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  });

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let activeSectionId = "";

      for (const section of sections) {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - sectionHeight / 3) {
          activeSectionId = section.getAttribute("id");
        }
      }

      setActiveSection(activeSectionId);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className="container">
        <Header activeSection={activeSection} /> {/* 현재 섹션 정보를 전달 */}
        <Main setActiveSection={setActiveSection} />
        <Section id="about" title="About" />
        <Section id="projects" title="Projects" />
        <Section id="career" title="Career" />
        <Footer />
        <ScrollTop />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
