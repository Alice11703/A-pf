import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Scroll() {
    useEffect(() => {
        // 애니메이션 설정
        gsap.fromTo(
            ".typo__wrapper", // 애니메이션 대상 클래스
            {
                opacity: 0,
                x: (index) => (index % 2 === 0 ? -100 : 100), // 초기 위치 설정
            },
            {
                opacity: 1,
                x: 0,
                duration: 1.5,
                stagger: 0.3, // 요소 간 간격
                scrollTrigger: {
                    trigger: ".typo__container", // 트리거 요소
                    start: "top 80%", // 시작 조건 (뷰포트의 80% 지점)
                    end: "bottom 20%", // 종료 조건 (뷰포트의 20% 지점)
                    toggleActions: "play none none reverse", // 동작 방식
                },
            }
        );
    }, []);

    return (
        <>
            {/* 첫 번째 행 */}
            <div className="typo__layout__row">
                <div className="typo__container">
                    <div className="typo__wrapper home__typo--lg">Hello,</div>
                    <div className="typo__wrapper home__typo--md">I'm Koeun</div>
                </div>
            </div>

            {/* 두 번째 열 */}
            <div className="typo__layout__col">
                <div className="typo__container">
                    <div className="typo__wrapper home__typo--sm">Frontend</div>
                    <div className="typo__wrapper home__typo--sm">Developer</div>
                </div>
            </div>
        </>
    );
}