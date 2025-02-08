import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Scroll() {
    useEffect(() => {
        const applyAnimations = () => {
            const screenWidth = window.innerWidth;
            const isTabletOrLarger = screenWidth > 500; // 500px 이하에서는 애니메이션 제거
            const isSmallScreen = screenWidth < 780; // 780px 이하에서는 기존 애니메이션 적용

            if (isTabletOrLarger) {
                const sections = gsap.utils.toArray(".sc__content > section");

                const fadeInFrom = (selector, fromVars, toVars) => {
                    gsap.fromTo(
                        selector,
                        fromVars,
                        {
                            ...toVars,
                            scrollTrigger: {
                                trigger: ".typo__container",
                                start: "top 80%",
                                toggleActions: "play none none reverse",
                            },
                        }
                    );
                };

                // "Hello" 애니메이션
                fadeInFrom(".home__typo--lg", { opacity: 0, y: -100 }, { opacity: 1, y: 0, duration: 1.5 });

                // "Developer" 애니메이션
                fadeInFrom(".home__typo--sm:last-child", { opacity: 0, y: 100 }, { opacity: 1, y: 0, duration: 1.5 });

                // 나머지 요소 애니메이션
                gsap.fromTo(
                    ".typo__wrapper:not(.home__typo--lg):not(.home__typo--sm:last-child)",
                    {
                        opacity: 0,
                        x: (index) =>
                            isSmallScreen
                                ? index % 3 === 0
                                    ? -50
                                    : index % 3 === 1
                                        ? 50
                                        : 0
                                : index % 2 === 0
                                    ? -10
                                    : 100,
                    },
                    {
                        opacity: 1,
                        x: 0,
                        duration: 1.5,
                        stagger: 0.3,
                        scrollTrigger: {
                            trigger: ".typo__container",
                            start: "top 90%",
                            end: "bottom 30%",
                            toggleActions: "play none none reverse",
                        },
                    }
                );

                // 스크롤로 사라지는 애니메이션
                gsap.utils.toArray(".typo__wrapper").forEach((element, index) => {
                    const direction = isSmallScreen
                        ? index % 3 === 0
                            ? -50
                            : index % 3 === 1
                                ? 50
                                : 0
                        : index % 2 === 0
                            ? -10
                            : 100;

                    ScrollTrigger.create({
                        trigger: element,
                        start: "top 85%",
                        end: "top 50%",
                        onLeave: () => {
                            gsap.to(element, { opacity: 0, x: direction, duration: 0.7 });
                        },
                        onEnterBack: () => {
                            gsap.to(element, { opacity: 1, x: 0, duration: 0.7 });
                        },
                    });
                });

                // 🔽 sc__content 내 섹션을 스냅 적용
                if (sections.length > 1) {
                    ScrollTrigger.create({
                        trigger: ".sc__content",
                        start: "top top",
                        end: "bottom bottom",
                        snap: {
                            snapTo: 1 / (sections.length - 1), // 각 섹션의 시작 부분을 기준으로 정렬
                            duration: 0.5,
                            ease: "power2.inOut",
                        },
                        markers: false,
                    });
                }
            }
        };

        // Debounce: Resize 시 성능 최적화
        const debounce = (func, delay) => {
            let timer;
            return (...args) => {
                clearTimeout(timer);
                timer = setTimeout(() => func(...args), delay);
            };
        };

        // 초기 애니메이션 설정
        applyAnimations();

        // Resize 이벤트
        const handleResize = debounce(() => {
            ScrollTrigger.refresh();
            gsap.killTweensOf(".typo__wrapper");
            applyAnimations();
        }, 300);

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);

    return (
        <div className="sc__content">
            <section className="section">
                <div className="typo__layout__row">
                    <div className="typo__container">
                        <div className="typo__wrapper home__typo--lg">Hello,</div>
                        <div className="typo__wrapper home__typo--md">I'm Koeun</div>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="typo__layout__col">
                    <div className="typo__container">
                        <div className="typo__wrapper home__typo--sm">Frontend</div>
                        <div className="typo__wrapper home__typo--sm">Developer</div>
                    </div>
                </div>
            </section>
        </div>
    );
}
