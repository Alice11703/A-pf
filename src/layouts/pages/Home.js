import React from "react";
import { Link } from 'react-router-dom';
import Scroll from "./Scroll";
import '../../statics/css/scroll.css';

const IconPoint = () => {
    return (
        <span className="ico__point"> </span>
    );
};

const Home = () => {
    return (
        <>
            <section id="home">
                <div className="sc__content home__cont">
                    <Scroll />
                    <div className="btn__resume">
                        <Link
                            to="https://drive.google.com/file/d/1xe8YSs-a-UVjByjfnrqSWIxScdsByuBI/view?usp=drive_link"
                            target="_blank"
                        >
                        </Link>
                        <IconPoint />
                    </div>
                </div>
            </section>
        </>
    );
}

export default Home;
