import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Scroll() {
    useEffect(() => {
        const applyAnimations = () => {
            const screenWidth = window.innerWidth;
            const isSmallScreen = screenWidth < 780;

            const sections = gsap.utils.toArray("section");
            sections.forEach((section, i) => {
                gsap.fromTo(section,
                    {
                        opacity: 0,
                        y: 30
                    },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.6,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: section,
                            start: "top bottom-=100",
                            end: "top center",
                            toggleActions: "play none none reverse",
                            markers: false,
                        }
                    }
                );
            });

            gsap.set(".typo__wrapper", {
                willChange: "transform, opacity",
                force3D: true,
                backfaceVisibility: "hidden"
            });

            const fadeInFrom = (selector, fromVars, toVars) => {
                gsap.fromTo(
                    selector,
                    {
                        ...fromVars,
                        force3D: true
                    },
                    {
                        ...toVars,
                        scrollTrigger: {
                            trigger: ".typo__container",
                            start: "top 60%",
                            end: "bottom 40%",
                            toggleActions: "play none none reverse",
                            fastScrollEnd: true,
                        },
                    }
                );
            };

            fadeInFrom(
                ".home__typo--lg",
                { 
                    opacity: 0,
                    y: 15,
                    rotateX: 10,
                    filter: "blur(3px)",
                    transformOrigin: "center center 50px"
                },
                { 
                    opacity: 1,
                    y: 0,
                    rotateX: 0,
                    filter: "blur(0px)",
                    duration: 0.8,
                    ease: "power2.out"
                }
            );

            fadeInFrom(
                ".home__typo--md",
                {
                    opacity: 0,
                    y: -15,
                    rotateX: -10,
                    filter: "blur(3px)",
                    transformOrigin: "center center 50px"
                },
                {
                    opacity: 1,
                    y: 0,
                    rotateX: 0,
                    filter: "blur(0px)",
                    duration: 0.8,
                    delay: 0.1,
                    ease: "power2.out"
                }
            );

            gsap.fromTo(
                ".typo__wrapper:not(.home__typo--lg):not(.home__typo--md)",
                {
                    opacity: 0,
                    x: (index) => {
                        if (isSmallScreen) {
                            return index % 3 === 0 ? -15 : index % 3 === 1 ? 15 : 0;
                        }
                        return index % 2 === 0 ? -10 : 10;
                    },
                    y: -10,
                    scale: 0.97,
                    rotateY: (index) => (index % 2 === 0 ? 8 : -8),
                    filter: "blur(2px)",
                    transformOrigin: "center center 30px"
                },
                {
                    opacity: 1,
                    x: 0,
                    y: 0,
                    scale: 1,
                    rotateY: 0,
                    filter: "blur(0px)",
                    duration: 0.7,
                    stagger: {
                        amount: 0.2,
                        ease: "power2.out"
                    },
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: ".typo__container",
                        start: "top 85%",
                        end: "bottom 30%",
                        toggleActions: "play none none reverse",
                        fastScrollEnd: true
                    },
                }
            );

            gsap.utils.toArray(".typo__wrapper").forEach((element, index) => {
                const direction = isSmallScreen
                    ? (index % 3 === 0 ? -30 : index % 3 === 1 ? 30 : 0)
                    : (index % 2 === 0 ? -20 : 20);

                ScrollTrigger.create({
                    trigger: element,
                    start: "top 85%",
                    end: "top 15%",
                    onLeave: () => {
                        gsap.to(element, {
                            opacity: 0,
                            x: direction,
                            rotateY: direction > 0 ? 20 : -20,
                            duration: 0.4,
                            ease: "power2.inOut",
                            force3D: true
                        });
                    },
                    onEnterBack: () => {
                        gsap.to(element, {
                            opacity: 1,
                            x: 0,
                            rotateY: 0,
                            duration: 0.4,
                            ease: "power2.inOut",
                            force3D: true
                        });
                    },
                    fastScrollEnd: true
                });
            });
        };

        const debounce = (func, wait) => {
            let timeout;
            return (...args) => {
                clearTimeout(timeout);
                timeout = setTimeout(() => func.apply(this, args), wait);
            };
        };

        applyAnimations();

        const handleResize = debounce(() => {
            ScrollTrigger.refresh();
            gsap.killTweensOf(".typo__wrapper, section");
            applyAnimations();
        }, 200);

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
            gsap.killTweensOf(".typo__wrapper, section");
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
