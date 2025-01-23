import React from "react";
import Scroll from "./Scroll";
import '../../statics/css/scroll.css';

const Home = () => {
    return (
        <>
            <section id="home">
                <div className="sc__content home__cont">
                    <Scroll />
                    {/* <h1 className="home__typo--lg">Hello, I'm</h1>
                    <h1 className="home__typo--lg">Koeun</h1>
                    <p className="home__typo--sm">Frontend</p>
                    <p className="home__typo--sm">Developer</p> */}
                </div>

            </section>
        </>
    );
}

export default Home;
