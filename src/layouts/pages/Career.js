import React from "react";
import CalyxLogoImage from '../../statics/images/logo_calyx.svg';
// import SALogoImage from '../../statics/images/logo_songam.jpeg';
import IncruitLogoImage from '../../statics/images/logo_incruit.png';
import CoopLogoImage from '../../statics/images/logo_coop.jpg';
import ELLogoImage from '../../statics/images/logo_everland.png';

// 경력 데이터 배열
const careerData = [
    {
        logo: CalyxLogoImage,
        title: "CalyxTechnologyInc.",
        position: "선임연구원/PDG",
        period: "2016.09 - 2024.06",
        description: `미국 금융 솔루션 개발 및 판매, 서비스
            주택 대출 업계에 특화된 소프트웨어 솔루션을 제공하는 기업으로
            대출 신청, 처리, 승인 등 전 과정을 지원하는 효율적인 도구와 플랫폼을 제공
            Calyx Software의 모든 제품의 UI 퍼블리싱을 담당`,
        contributions: [
            { 
                product: "Product PATH", 
                desc: "대출 기관을 위한 대출 프로세스를 간소화하는 클라우드 기반의 솔루션", 
                contribution: "프로젝트 개발 및 유지보수", 
                tools: "협업 도구: TFS, Figma, Teams",
                link: "https://www.pathsoftware.com"
            },
            { 
                product: "Product ZENLY", 
                desc: "클라우드 기반 대출 플랫폼으로, 대출 프로세스를 간소화하고 효율성을 높여주는 모기지 플랫폼", 
                contribution: "프로젝트 개발 및 유지보수, 반응형 웹 서비스", 
                subDesc: "미국 웹 접근성 (ADA) 인증 진행", 
                tools: "협업 도구: Github, Notion, Jira, Slack",
                link: "https://www.calyxsoftware.com/products/zenly"
            },
            { 
                product: "Product MME(Mortgage Market Exchange) UI", 
                desc: "Vendor를 위한 웹 기반의 내부 솔루션", 
                contribution: "프로젝트 개발 및 유지보수, 반응형 웹 서비스", 
                tools: "협업 도구: Jira, Teams",
                link: "https://mme-prjt.netlify.app/main.html"
            },
        ],
    },
    {
        logo: IncruitLogoImage,
        title: "인크루트앤코 주식회사",
        position: "팀원/디자인팀",
        period: "2014.04 - 2015.07",
        description: `인크루트 디자인팀 내 UI 퍼블리싱 담당으로
        기존 서비스의 유지보수 업무 및 신규 서비스 개발 업무를 진행`,
        contributions: [
            { desc: "인크루트 메인 개편 작업" },
            { desc: "SNS 로그인 기능 추가" },
            { desc: "간편접속 기능 추가" },
            { desc: "공채총정리 리스트 개선 작업" },
            { desc: "웹/모바일 자동 로그인 기능 추가" },
            { desc: "인크루트 취업학교 3차 UI디자인 및 퍼블리싱" },
            { desc: "맞춤법 검사 서비스 리뉴얼" },
            { desc: "우수기업 채용박람회 작업" },
            { desc: "인크루트 신입공채 페이지 리뉴얼" },
            { desc: "직무적성검사 프로모션 작업" },
            { desc: "인크루트 이력서 리뉴얼 프로젝트" },
            { desc: "2014 인크루트 취업학교 오픈" },
            { desc: "사진 수정 서비스개선" },
            { desc: "2014 공채총정리 리뉴얼" }
        ],
    },
    {
        logo: CoopLogoImage,
        title: "쿠프마케팅",
        position: "연구원/서비스개발팀",
        period: "2012.11 - 2014.01",
        description: `고객사들의 신규 서비스 런칭 및 유지보수 업무 진행`,
        contributions: [
            { desc: "해피포인트 태블릿/모바일 서비스" },
            { desc: "POSA CARD 웹/모바일" },
            { desc: "삼성 15days 포인트샵" },
            { desc: "바통 모바일/웹 (쿠폰인증 페이지 퍼블리싱)" },
            { desc: "티끌 서비스 모바일/웹" },
            { desc: "KB스타콘 모바일" },
            { desc: "이지웰 복지몰" },
            { desc: "삼성m포켓 어플 (유료쿠폰 서비스 퍼블리싱)" },
            { desc: "해피머니" },
            { desc: "박승철 헤어스투디오 홈페이지" },
            { desc: "LGU+ 파워초이스 모바일" },
            { desc: "신한 빅라이프 멤버십 웹/모바일 서비스" }
        ],
    },
    {
        logo: ELLogoImage,
        title: "삼성물산(주) 에버랜드리조트",
        position: "팀원/F&B팀",
        period: "2010.01 - 2010.03",
        description: "F&B 부서 디자인 인턴 근무",
        contributions: [
            { desc: "파크 내 POP 디자인 및 관리" }
        ],
    },
];

const Career = () => {
    return (
        <>
            <div className="sc__content">
                <div className="career__period">
                    <span>경력사항</span>
                    <span>총 10년 6개월</span>
                </div>
                {careerData.map((career, index) => (
                    <div className="career__cont" key={index}>
                        <div className="career__logo">
                            <img alt={`${career.title}_logo`} className="unselectable" src={career.logo} />
                        </div>
                        <div className="career__detail">
                            <div className="career__title">
                                <span>{career.title}</span>
                                <span>{career.position}</span>
                                <span>{career.period}</span>
                            </div>
                            <div className="career__desc">
                                {career.description}
                                {career.contributions && career.contributions.map((contribution, idx) => (
                                    <div key={idx}>
                                        {contribution.product && (
                                            <div className="product-header">
                                                <span>{contribution.product}</span>
                                                {contribution.link && (
                                                    <a 
                                                        href={contribution.link} 
                                                        target="_blank" 
                                                        rel="noopener noreferrer" 
                                                        className="goto-btn"
                                                    >
                                                        Visit
                                                    </a>
                                                )}
                                            </div>
                                        )}
                                        {contribution.desc && contribution.desc.trim() !== '' && (
                                            <p>{contribution.desc}</p>
                                        )}
                                        {contribution.contribution && contribution.contribution.trim() !== '' && (
                                            <p>{contribution.contribution}</p>
                                        )}
                                        {contribution.subDesc && contribution.subDesc.trim() !== '' && (
                                            <p>{contribution.subDesc}</p>
                                        )}
                                        {contribution.tools && contribution.tools.trim() !== '' && (
                                            <p>{contribution.tools}</p>
                                        )}
                                    </div>
                                ))}
                            </div>
                            <span className="border__style"></span>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Career;

