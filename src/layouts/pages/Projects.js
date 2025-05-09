import React from "react";
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import PathImage01 from '../../statics/images/prjt/img_path_screen01.png';
// import PathImage02 from '../../statics/images/prjt/img_path_screen02.png';
// import PathImage03 from '../../statics/images/prjt/img_path_screen03.png';
// import PathImage04 from '../../statics/images/prjt/img_path_screen04.png';
import ZenlyImage01 from '../../statics/images/prjt/img_zenly_screen01.png';
import PointImage01 from '../../statics/images/prjt/img_point_screen01.png';
// import PointImage02 from '../../statics/images/prjt/img_point_screen02.png';
import MMEImage01 from '../../statics/images/prjt/img_mme_screen01.png';

// const IconDot = () => {
//     return (
//         <span className="ico__dot"> </span>
//     );
// };

const Projects = () => {
    return (
        <>
            <Helmet>
                <title>포트폴리오 프로젝트 | Alice의 개발 작업물</title>
                <meta name="description" content="프론트엔드 개발자 Alice의 포트폴리오입니다. Path, Zenly, Point, MME, 만다라트 플래너 등 다양한 웹 프로젝트를 확인하실 수 있습니다." />
                <meta name="keywords" content="프론트엔드 개발자, 포트폴리오, React, TypeScript, Next.js, 웹 개발" />
                <meta property="og:title" content="Alice의 프로젝트 포트폴리오" />
                <meta property="og:description" content="프론트엔드 개발자 Alice의 포트폴리오입니다. Path, Zenly, Point, MME, 만다라트 플래너 등 다양한 웹 프로젝트를 확인하실 수 있습니다." />
                <meta property="og:type" content="website" />
                <meta name="robots" content="index, follow" />
            </Helmet>
            <section className="projects-section" aria-label="프로젝트 목록">
                <div className="project__cont">
                    {/* Zenly */}
                    <article className="project__article">
                        <div className="project__content">
                            <h3>Zenly</h3>
                            <div className="project__image"><img alt="my_profile_image" src={ZenlyImage01} /></div>
                            <p>프로세스 간소화를 통해 효율성을 높여주는 미국 내 고객 대상 비대면 대출 신청 플랫폼</p>
                            <div className="project__tags">
                                <span className="project__tag">HTML</span>
                                <span className="project__tag">CSS</span>
                                <span className="project__tag">JavaScript</span>
                            </div>
                            <div className="project__links">
                                <button
                                    className="project__link"
                                    onClick={() => window.open('https://kenmossmoss.zipforhome.com/', '_blank')}
                                >
                                    View Project Site 01
                                </button>
                                <button
                                    className="project__link"
                                    onClick={() => window.open('https://jennyellul.zipforhome.com/', '_blank')}
                                >
                                    View Project Site 02
                                </button>
                                <button
                                    className="project__link"
                                    onClick={() => window.open('https://robertfoster.zipforhome.com/', '_blank')}
                                >
                                    View Project Site 03
                                </button>
                            </div>
                        </div>
                    </article>
                    {/* Path */}
                    <article className="project__article">
                        <div className="project__content">
                            <h3>Path</h3>
                            <div className="project__image"><img alt="Product Path Screen" src={PathImage01} /></div>
                            <p>대출 기관을 위한 대출 프로세스를 간소화하는 클라우드 기반의 솔루션</p>
                            <div className="project__tags">
                                <span className="project__tag">HTML</span>
                                <span className="project__tag">CSS</span>
                                <span className="project__tag">JavaScript</span>
                            </div>                           
                            <div className="project__links">
                            <button
                                    className="project__link"
                                    onClick={() => window.open('/Users/alice/Documents/GitHub/A-pf/src/statics/images/prjt/img_path_screen01.png', '_blank')}
                                >
                                    Screen 01
                                </button>
                                <button
                                    className="project__link"
                                    onClick={() => window.open('/Users/alice/Documents/GitHub/A-pf/src/statics/images/prjt/img_path_screen02.png', '_blank')}
                                >
                                    Screen 02
                                </button>
                                <button
                                    className="project__link"
                                    onClick={() => window.open('/Users/alice/Documents/GitHub/A-pf/src/statics/images/prjt/img_path_screen03.png', '_blank')}
                                >
                                    Screen 03
                                </button>
                                <button
                                    className="project__link"
                                    onClick={() => window.open('/Users/alice/Documents/GitHub/A-pf/src/statics/images/prjt/img_path_screen04.png', '_blank')}
                                >
                                    Screen 04
                                </button>
                            </div>
                            <h4>내부 보안 정책에 따라 이미지로 대체하여 제공합니다.</h4>
                        </div>
                    </article>
                    {/* Point */}
                    <article className="project__article">
                        <div className="project__content">
                            <h3>Point</h3>
                            <div className="project__image"><img alt="Product Point Screen" src={PointImage01} /></div>
                            <p>모기지 대출 프로세스를 자동화하고 간소화하는 데 중점을 둔 소프트웨어로, 대출 신청부터 승인, 클로징까지의 전 과정을 지원하는 통합 POS 시스템</p>
                            <div className="project__tags">
                                <span className="project__tag">HTML</span>
                                <span className="project__tag">CSS</span>
                                <span className="project__tag">JavaScript</span>
                            </div>
                            <div className="project__links">
                            <button
                                    className="project__link"
                                    onClick={() => window.open('/Users/alice/Documents/GitHub/A-pf/src/statics/images/prjt/img_point_screen01.png', '_blank')}
                                >
                                    Screen 01
                                </button>
                                <button
                                    className="project__link"
                                    onClick={() => window.open('/Users/alice/Documents/GitHub/A-pf/src/statics/images/prjt/img_point_screen02.png', '_blank')}
                                >
                                    Screen 02
                                </button>
                            </div>
                            <h4>내부 보안 정책에 따라 이미지로 대체하여 제공합니다.</h4>
                        </div>
                    </article>
                    {/* MME */}
                    <article className="project__article">
                        <div className="project__content">
                            <h3>Mortgage Market Exchange</h3>
                            <div className="project__image"><img alt="Product MME Screen" src={MMEImage01} /></div>
                            <p>MME는 사용자가 대출을 신청하고, 제출한 대출의 진행 상황을 확인할 수 있도록 지원하는 플랫폼입니다. 금융 기관과 대출 신청자 간의 원활한 커뮤니케이션을 돕는 것을 목표로 합니다.
                            </p>
                            <div className="project__tags">
                                <span className="project__tag">HTML</span>
                                <span className="project__tag">CSS</span>
                                <span className="project__tag">JavaScript</span>
                                <span className="project__tag">React</span>
                            </div>
                            <div className="project__links">
                                <button
                                    className="project__link"
                                    onClick={() => window.open('https://mme-prjt.netlify.app/main', '_blank')}
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
                    {/* mandalart */}
                    <article className="project__article">
                        <div className="project__content">
                            <h3>만다라트 플래너</h3>
                            <p>React 기반 연습용 프로젝트. 만다라트 플래너는 목표 설정과 달성을 돕는 온라인 계획 도구입니다. 핵심 목표를 중심으로 세부 목표를 체계적으로 수립하고 관리할 수 있습니다. TypeScript를 이용해 만들었습니다.</p>
                            <div className="project__tags">
                                <span className="project__tag">React</span>
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
                    </article>
                </div>
                <nav className="project__social" aria-label="소셜 미디어 링크">
                    <Link to="https://github.com/Alice11703" target="_blank" rel="noopener noreferrer" aria-label="GitHub 프로필">GitHub</Link>
                    {/* <Link to="https://velog.io/@-gromit/posts" target="_blank" rel="noopener noreferrer" aria-label="VELOG 블로그">VELOG</Link> */}
                </nav>
            </section>
        </>
    );
}

export default Projects;

