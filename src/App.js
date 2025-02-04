import React, { useState, useEffect } from "react";
import Header from './layouts/Header';
import Main from './layouts/Main';
import Footer from './layouts/Footer';
import Section from './layouts/pages/Section';

function App() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let currentSection = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - sectionHeight / 3) {
          currentSection = section.getAttribute("id");
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="container">
      <Header activeSection={activeSection} /> {/* 현재 섹션 정보를 전달 */}
      <Main setActiveSection={setActiveSection} />
      <Section id="about" title="About" />
      <Section id="projects" title="Projects" />
      <Section id="career" title="Career" />
      <Footer />
    </div>
  );
}

export default App;
