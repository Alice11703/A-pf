import React from "react";
import { Link } from 'react-router-dom';

const IconDot = () => {
    return (
        <span className="ico__dot"> </span>
    );
};

const Projects = () => {
    return (
        <>
            <p><IconDot /> ~ {new Date().getMonth() + 1}.{new Date().getFullYear()}</p>
            
            <div className="project__cont">
                <article className="project__article">
                    <div className="project__content">
                        <h3>만다라트 플래너</h3>
                        <p>만다라트 플래너는 목표 설정과 달성을 돕는 온라인 계획 도구입니다. 핵심 목표를 중심으로 세부 목표를 체계적으로 수립하고 관리할 수 있습니다. TypeScript를 이용해 만들었습니다.</p>
                        <div className="project__tags">
                            <span className="project__tag">Next.js</span>
                            <span className="project__tag">TypeScript</span>
                            <span className="project__tag">Tailwind CSS, Emotion </span>
                            <span className="project__tag">Vercel</span>
                        </div>
                        <div className="project__links">
                            <button
                                className="project__link"
                                onClick={() => window.open('https://mandalart-planner.netlify.app/', '_blank')}
                            >
                                View Project →
                            </button>
                            <button
                                className="project__link"
                                onClick={() => window.open('https://github.com/Alice11703/mandalart-planner', '_blank')}
                            >
                                GitHub →
                            </button>
                        </div>
                    </div>
                </article>
                <article className="project__article">
                    <div className="project__content">
                        <h3>Project 2</h3>
                        <p>프로젝트 설명이 들어갑니다.</p>
                        <div className="project__tags">
                            <span className="project__tag">React</span>
                            <span className="project__tag">TypeScript</span>
                            <span className="project__tag">GSAP</span>
                        </div>
                        <div className="project__links">
                            <button
                                className="project__link"
                                onClick={() => window.open('프로젝트URL', '_blank')}
                            >
                                View Project →
                            </button>
                            <button
                                className="project__link"
                                onClick={() => window.open('깃허브URL', '_blank')}
                            >
                                GitHub →
                            </button>
                        </div>
                    </div>
                </article>
                <article className="project__article">
                    <div className="project__content">
                        <h3>Project 3</h3>
                        <p>프로젝트 설명이 들어갑니다.</p>
                        <div className="project__tags">
                            <span className="project__tag">React</span>
                            <span className="project__tag">TypeScript</span>
                            <span className="project__tag">GSAP</span>
                        </div>
                        <div className="project__links">
                            <button
                                className="project__link"
                                onClick={() => window.open('프로젝트URL', '_blank')}
                            >
                                View Project →
                            </button>
                            <button
                                className="project__link"
                                onClick={() => window.open('깃허브URL', '_blank')}
                            >
                                GitHub →
                            </button>
                        </div>
                    </div>
                </article>
                <article className="project__article">
                    <div className="project__content">
                        <h3>Project 4</h3>
                        <p>프로젝트 설명이 들어갑니다.</p>
                        <div className="project__tags">
                            <span className="project__tag">React</span>
                            <span className="project__tag">TypeScript</span>
                            <span className="project__tag">GSAP</span>
                        </div>
                        <div className="project__links">
                            <button
                                className="project__link"
                                onClick={() => window.open('프로젝트URL', '_blank')}
                            >
                                View Project →
                            </button>
                            <button
                                className="project__link"
                                onClick={() => window.open('깃허브URL', '_blank')}
                            >
                                GitHub →
                            </button>
                        </div>
                    </div>
                </article>
            </div>
            <div className="project__social">
                <Link to="https://github.com/Alice11703" target="_blank">GitHub</Link>
                <Link to="https://velog.io/@-gromit/posts" target="_blank">VELOG</Link>
            </div>
        </>
    );
}

export default Projects;

