import React from "react";
import About from "./About";
import Projects from "./Projects";
import Career from "./Career";

const Section = ({ id, title }) => {

    const renderContent = () => {
        const lowerId = id.toLowerCase();
        switch (lowerId) {
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
        <section id={id} title={title} className="section" style={{ minHeight: '100vh' }}>
            <h2 className="sc__title"> {title}</h2>
            {renderContent()}
        </section>
    );
};

export default Section;