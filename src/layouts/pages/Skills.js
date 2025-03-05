import React from "react";

const HTML = 'HTML';
const CSS = 'CSS';
const JAVASCRIPT = 'Javascript';
const REACT = 'React';
// const TYPESCRIPT = 'TypeScript';
const WEB_ACCESSIBILITY = 'Web Accessibility';
const TAILWIND_CSS = 'Tailwind CSS';
const SASS = 'SASS';


const Skills = () => {
    return (
        <>
            <div className="skill__cont--set">
                <p>{HTML}</p>
                <p>{CSS}</p>
                <p>{WEB_ACCESSIBILITY}</p>
                <p>{JAVASCRIPT}</p>
                <p>{REACT}</p>
                {/* <p>{TYPESCRIPT}</p> */}
                <p>{TAILWIND_CSS}</p>
                <p>{SASS}</p>
            </div>
        </>
    );
}

export default Skills;

