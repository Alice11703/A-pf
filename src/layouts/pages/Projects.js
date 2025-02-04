import React from "react";

const today = new Date();
const month = today.getMonth() + 1;
const year = today.getFullYear();
const currentDate = month + "." + year;

const Projects = () => {
    return (
        <>
            <span> ~ {currentDate}</span>
            <div className="sc__content project__cont">
                <article>1</article>
                <article>2</article>
                <article>3</article>
            </div>
        </>
    );
}

export default Projects;

