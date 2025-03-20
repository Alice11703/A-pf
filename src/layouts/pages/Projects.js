import React from "react";
import { Link } from 'react-router-dom';

// const IconDot = () => {
//     return (
//         <span className="ico__dot"> </span>
//     );
// };

const Projects = () => {
    return (
        <>
            <div className="project__cont">
                <article className="project__article">
                    <div className="project__content">
                        <h3>Mortgage Market Exchange</h3>
                        <p>MME는 사용자가 대출을 신청하고, 제출한 대출의 진행 상황을 확인할 수 있도록 지원하는 플랫폼입니다. 금융 기관과 대출 신청자 간의 원활한 커뮤니케이션을 돕는 것을 목표로 합니다.
                        </p>
                        <div className="project__tags">
                            <span className="project__tag">HTML</span>
                            <span className="project__tag">CSS</span>
                            <span className="project__tag">JavaScript</span>
                        </div>
                        <div className="project__links">
                            <button
                                className="project__link"
                                onClick={() => window.open('https://mme-prjt.netlify.app', '_blank')}
                            >
                                View Project
                            </button>
                            <button
                                className="project__link"
                                onClick={() => window.open('https://github.com/Alice11703/MME_prjt', '_blank')}
                            >
                                GitHub
                            </button>
                        </div>
                    </div>
                </article>
                {/* <article className="project__article">
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
                                View Project
                            </button>
                            <button
                                className="project__link"
                                onClick={() => window.open('https://github.com/Alice11703/mandalart-planner', '_blank')}
                            >
                                GitHub
                            </button>
                        </div>
                    </div>
                </article> */}
                {/* <article className="project__article">
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
                                View Project
                            </button>
                            <button
                                className="project__link"
                                onClick={() => window.open('깃허브URL', '_blank')}
                            >
                                GitHub
                            </button>
                        </div>
                    </div>
                </article> */}
                {/* <article className="project__article">
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
                </article> */}
            </div>
            <div className="project__social">
                <Link to="https://github.com/Alice11703" target="_blank">GitHub</Link>
                <Link to="https://velog.io/@-gromit/posts" target="_blank">VELOG</Link>
            </div>
        </>
    );
}

export default Projects;

