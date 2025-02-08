import React from "react";
import { Link } from 'react-router-dom';

const today = new Date();
const month = today.getMonth() + 1;
const year = today.getFullYear();
const currentDate = month + "." + year;

const IconDot = () => {
    return (
        <span className="ico__dot"> </span>
    );
};

const Projects = () => {
    return (
        <>
            <p><IconDot /> ~ {currentDate}</p>
            <div className="sc__content project__cont">
                <article>1</article>
                <article>2</article>
                <article>3</article>
            </div>
            <div className="project__social">
                <Link to="https://velog.io/@-gromit/posts" target="_blank">VELOG</Link>
            </div>
        </>
    );
}

export default Projects;

