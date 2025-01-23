import React, { useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import '../statics/css/main.css';
import '../statics/css/flexible.css';
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Career from "./pages/Career";
import TopButton from "../modules/TopButton";


const Main = () => {
    useEffect(() => {
        const sections = document.querySelectorAll('section');

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible'); // 보이는 섹션에 클래스 추가
                    } else {
                        entry.target.classList.remove('visible'); // 안 보이는 섹션에서 클래스 제거
                    }
                });
            },
            {
                root: null,
                threshold: 0.2,
            }
        );

        sections.forEach((section) => observer.observe(section));
        return () => observer.disconnect();
    }, []);

    return (
      <>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
        <section id="_about" className="section" style={{ height: '100vh' }}>
          <About />
        </section>
        <section id="_projects" className="section" style={{ height: '100vh' }}>
          <Projects />
        </section>
        <section id="_career" className="section" >
          <Career />
        </section>
      </div>
      <TopButton />
    </>
        
    );
};

export default Main;