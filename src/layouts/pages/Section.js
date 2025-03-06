import React from "react";
import About from "./About";
import Projects from "./Projects";
import Career from "./Career";

const Section = ({ id, title }) => {

    const renderContent = () => {
        const normalizedId = id.toLowerCase();
        switch (normalizedId) {
            case 'about':
                return <About />;
            case 'projects':
                return <Projects />;
            case 'career':
                return <Career />;
            default:
                return <p>Null</p>;
        }
    };

    return (
        <section id={id} className="section">
            <h2 className="sc__title">
                {title}
                {title === "Projects" && (
                    <span className="project__period"> ~ {new Date().getMonth() + 1}.{new Date().getFullYear()}</span>
                )}
            </h2>
            {renderContent()}
        </section>
    );
};

export default Section;