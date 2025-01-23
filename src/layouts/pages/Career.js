import React from "react";
import Title from "../../modules/Title";
import CalyxLogoImage from '../../statics/images/logo_calyx.svg';
// const NAME = '김고은';

const today = new Date();
const month = today.getMonth() + 1;
const year = today.getFullYear();
const currentDate = month + "." + year;


const Career = () => {
    return (
        <>
            <div>
                <Title />
                <div className="sc__content">
                    <div className="career__period">
                        <span>경력사항</span>
                        <span>총 11년</span>
                        <span> ~ {currentDate}</span>
                    </div>
                    <div className="career__cont">
                        <div className="career__logo">
                            <img alt="calyx_logo" src={CalyxLogoImage} />
                        </div>
                        <div className="career__detail">
                            <div className="career__title">
                                <span>CalyxTechnologyInc.한국사무소</span>
                                <span>선임연구원&#47;PDG</span>
                                <span>2016.09 - 2024.06</span> <span>[7년 10개월]</span>
                            </div>
                            <div className="career__desc">
                                미국 금융 솔루션 개발 및 판매, 서비스<br />
                                주택 대출 업계에 특화된 소프트웨어 솔루션을 제공하는 기업으로<br />
                                대출 신청, 처리, 승인 등 전 과정을 지원하는 효율적인 도구와 플랫폼을 제공<br />
                                Calyx Software의 모든 제품의 UI 퍼블리싱을 담당
                                <br /><br />

                                <span>Product PATH</span>
                                <a href="https://www.pathsoftware.com" target="_blank" rel="noreferrer">[사이트 바로가기]</a><br />
                                대출 기관을 위한 대출 프로세스를 간소화하는 클라우드 기반의 솔루션<br />
                                - 프로젝트 개발 및 유지보수<br />
                                - 협업 도구: TFS, Figma, Teams
                                <br /><br />

                                <span>Product ZENLY</span>
                                <a href="https://www.calyxsoftware.com/products/zenly" target="_blank" rel="noreferrer">[사이트 바로가기]</a><br />
                                클라우드 기반 대출 플랫폼으로, 대출 프로세스를 간소화하고 효율성을 높여주는 모기지 플랫폼<br />
                                - 프로젝트 개발 및 유지보수, 반응형 웹 서비스<br />
                                - node.js 기반의 프로덕트<br />
                                - 미국 웹 접근성 (ADA) 인증 진행<br />
                                - 협업 도구: Github, Notion, Jira, Slack
                                <br /><br />

                                <span>Product MME(Mortgage Market Exchange) UI</span>
                                <a href="/" target="_blank" rel="noreferrer">[목업 바로가기]</a><br />
                                Vendor를 위한 웹 기반의 내부 솔루션<br />
                                - 프로젝트 개발 및 유지보수<br />
                                협업 도구: Jira, Teams
                            </div>
                            <span className="border__style"></span>
                        </div>
                    </div>
                    <div className="career__cont">
                        <div className="career__logo">
                            <img alt="calyx_logo" src={CalyxLogoImage} />
                        </div>
                        <div className="career__detail">
                            <div className="career__title">
                                <span>재단법인 송암스페이스센터</span>
                                <span>사원&#47;디자인팀</span>
                                <span>2016.02 - 2016.07</span> <span>[6개월]</span>
                            </div>
                            <div className="career__desc">
                                - 2016 NASA 영어캠프 프로젝트 진행<br />
                                - 사내 홈페이지 유지 보수<br />
                                - 과학 교재 편집디자인<br />
                            </div>
                            <span className="border__style"></span>
                        </div>
                    </div>
                    <div className="career__cont">
                        <div className="career__logo">
                            <img alt="calyx_logo" src={CalyxLogoImage} />
                        </div>
                        <div className="career__detail">
                            <div className="career__title">
                                <span>인크루트앤코 주식회사</span>
                                <span>팀원&#47;디자인팀</span>
                                <span>2014.04 - 2015.07</span> <span>[1년 4개월]</span>
                            </div>
                            <div className="career__desc">
                                - 인크루트 메인 개편 작업<br />
                                - SNS 로그인 기능 추가<br />
                                - 간편접속 기능 추가<br />
                                - 공채총정리 리스트 개선 작업<br />
                                - 웹/모바일 자동 로그인 기능 추가<br />
                                - 인크루트 취업학교 3차 UI디자인 및 퍼블리싱<br />
                                - 맞춤법 검사 서비스 리뉴얼<br />
                                - 우수기업 채용박람회 작업<br />
                                - 인크루트 신입공채 페이지 리뉴얼<br />
                                - 직무적성검사 프로모션 작업<br />
                                - 인크루트 이력서 리뉴얼 프로젝트<br />
                                - 2014 인크루트 취업학교 오픈<br />
                                - 사진 수정 서비스개선<br />
                                - 2014 공채총정리 리뉴얼<br />
                            </div>
                            <span className="border__style"></span>
                        </div>
                    </div>
                    <div className="career__cont">
                        <div className="career__logo">
                            <img alt="calyx_logo" src={CalyxLogoImage} />
                        </div>
                        <div className="career__detail">
                            <div className="career__title">
                                <span>쿠프마케팅</span>
                                <span>연구원&#47;서비스개발팀</span>
                                <span>2012.11 - 2014.01</span> <span>[1년 3개월]</span>
                            </div>
                            <div className="career__desc">
                                - 해피포인트 태블릿/모바일 서비스<br />
                                - POSA CARD 웹/모바일<br />
                                - 삼성 15days 포인트샵<br />
                                - 바통 모바일/웹 (쿠폰인증 페이지 퍼블리싱)<br />
                                - 티끌 서비스 모바일/웹<br />
                                - KB스타콘 모바일<br />
                                - 이지웰 복지몰<br />
                                - 삼성m포켓 어플 (유료쿠폰 서비스 퍼블리싱)<br />
                                - 해피머니<br />
                                - 박승철 헤어스투디오 홈페이지<br />
                                - LGU+ 파워초이스 모바일<br />
                                - 신한 빅라이프 멤버십 웹/모바일 서비스<br />
                            </div>
                                <span className="border__style"></span>
                        </div>
                    </div>
                    <div className="career__cont">
                        <div className="career__logo">
                            <img alt="calyx_logo" src={CalyxLogoImage} />
                        </div>
                        <div className="career__detail">
                            <div className="career__title">
                                <span>삼성물산(주) 에버랜드리조트</span>
                                <span>팀원&#47;F&#38;B팀</span>
                                <span>2010.01 - 2010.03</span> <span>[3개월]</span>
                            </div>
                            <div className="career__desc">
                                F&B 부서 디자인 인턴 근무<br />
                                파크 내 POP 디자인 및 관리
                            </div>
                            <span className="border__style"></span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Career;

