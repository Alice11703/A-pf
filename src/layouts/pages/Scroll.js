import React from "react";
import { ScrollAnimation } from "@lasbe/react-scroll-animation";

export default function Scroll() {
    return (
        <>
            <div className="typo__layout__row">
                <div className="typo__container">
                    <ScrollAnimation
                        startingPoint="top"
                        duration={2}
                        amount="xl"
                        delay={0.5}
                        repeat
                    >
                        <div className="typo__wrapper home__typo--lg">Hello,</div>
                    </ScrollAnimation>
                    <ScrollAnimation
                        startingPoint="left"
                        duration={2}
                        amount="xl"
                        delay={0.5}
                    >
                        <div className="typo__wrapper home__typo--md">I'm Koeun</div>
                    </ScrollAnimation>
                </div>
            </div>
            <div className="typo__layout__col">
                <div className="typo__container">
                    <ScrollAnimation
                        startingPoint="bottom"
                        duration={2}
                        amount="sm"
                        delay={0.5}
                    >
                        <div className="typo__wrapper home__typo--sm">Frontend</div>
                    </ScrollAnimation>
                    <ScrollAnimation
                        startingPoint="right"
                        duration={2}
                        amount="sm"
                        delay={0.5}
                        repeat
                    >
                        <div className="typo__wrapper home__typo--sm">Developer</div>
                    </ScrollAnimation>
                </div>
            </div>
        </>
    );
}
