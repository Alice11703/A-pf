import React, { useEffect, useCallback } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TopButton from "../components/TopButton";
import FloatingMenu from '../components/FloatingMenu';

const Main = () => {
  // 📌 `useCallback`으로 `handleResize` 최적화
  const handleResize = useCallback(() => {
    setTimeout(() => {
      const lastSection = document.querySelector("section:last-of-type");
      if (lastSection && isBottom()) {
        lastSection.classList.add("visible");
      }
    }, 200);
  }, []);

  useEffect(() => {
    let observer;

    const observeSections = () => {
      if (observer) observer.disconnect();
      const sections = document.querySelectorAll("section");

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const isLastSection = entry.target === sections[sections.length - 1];

            if (entry.isIntersecting || (isLastSection && isBottom())) {
              entry.target.classList.add("visible");
            } else {
              entry.target.classList.remove("visible");
            }
          });
        },
        {
          root: null,
          threshold: 0.2,
        }
      );

      sections.forEach((section) => observer.observe(section));
    };

    observeSections();
    window.addEventListener("resize", handleResize);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]); // ✅ `useCallback`으로 감싼 `handleResize`를 의존성 배열에 추가

  const isBottom = () => {
    return window.innerHeight + window.scrollY >= document.body.offsetHeight - 10;
  };

  return (
    <>
      <FloatingMenu />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <TopButton />
    </>
  );
};

export default Main;
