import React from "react";
import { Routes, Route } from "react-router-dom";
import '../statics/css/main.css';
import '../statics/css/flexible.css';
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Career from "./pages/Career";
import TopButton from "../modules/TopButton";

const Main = () => {
  return (
    <>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
        <About />
        <Projects />
        <Career />
      </div>
      <TopButton />
    </>
  );

}

export default Main;

