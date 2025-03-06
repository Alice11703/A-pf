import React, { memo, useState } from "react";
import GallupImage from '../../statics/images/img_gallup.png';

const strengthsData = [
    {
        id: 1,
        name: "탁월성 추구 (Maximizer)",
        colorClass: "bar__orange",
        details: [
            {
                title: "강점",
                content: "뛰어난 성과를 위해 강점을 극대화하는 것을 추구합니다."
            },
            {
                title: "적용",
                content: "다른 사람들의 강점을 인식하고, 이를 활용해 팀과 조직의 성과를 극대화합니다."
            },
            {
                title: "가치",
                content: "항상 최고를 목표로 하며, 완벽한 결과를 위해 끊임없이 노력합니다."
            }
        ]
    },
    {
        id: 2,
        name: "유연성 (Adaptability)",
        colorClass: "bar__blue",
        details: [
            {
                title: "강점",
                content: "변화에 유연하게 대응하며, 현재의 상황에 집중해 최적의 결과를 도출합니다."
            },
            {
                title: "적용",
                content: "빠르게 변하는 환경에서도 차분하게 업무를 조정하고 안정감을 유지합니다."
            },
            {
                title: "가치",
                content: "예기치 못한 상황에서도 빠르게 적응하며, 팀을 안정적으로 이끌어 갑니다."
            }
        ]
    },
    {
        id: 3,
        name: "신뢰 형성 (Relator)",
        colorClass: "bar__blue",
        details: [
            {
                title: "강점",
                content: "깊고 신뢰할 수 있는 관계를 형성하는 데 강점을 둡니다."
            },
            {
                title: "적용",
                content: "신뢰를 바탕으로 긴밀한 관계를 맺고, 협력적인 분위기에서 성과를 도출합니다."
            },
            {
                title: "가치",
                content: "진정성과 신뢰를 바탕으로 팀워크와 소통을 강화합니다."
            }
        ]
    },
    {
        id: 4,
        name: "맞춤형 접근 (Individualization)",
        colorClass: "bar__blue",
        details: [
            {
                title: "강점",
                content: "사람마다 고유한 특성을 이해하고, 각자의 강점을 이끌어냅니다."
            },
            {
                title: "적용",
                content: "팀원들의 개별적 특성을 파악하고, 이를 기반으로 협업을 강화합니다."
            },
            {
                title: "가치",
                content: "개인의 특성을 존중하며, 맞춤형 접근을 통해 높은 성과를 이끌어냅니다."
            }
        ]
    },
    {
        id: 5,
        name: "책임감 (Responsibility)",
        colorClass: "bar__purple",
        details: [
            {
                title: "강점",
                content: "맡은 일을 끝까지 책임지고, 약속을 반드시 지킵니다."
            },
            {
                title: "적용",
                content: "프로젝트나 업무에서 맡은 바를 성실히 이행하며, 결과를 보장합니다."
            },
            {
                title: "가치",
                content: "신뢰를 바탕으로 팀의 안정성과 성과를 책임집니다."
            }
        ]
    }
];

// 상수 분리
const GALLUP_LINK = "https://drive.google.com/file/d/107YKRj9gyFcJq1PAtxIy2mIBzc8k3lyE/view?usp=sharing";
const DESCRIPTION_TEXT = "이 강점들은 제가 맡은 일에서 최상의 결과를 도출하고, 협력과 신뢰를 바탕으로 성과를 극대화하는 데 중요한 역할을 합니다. 각 강점을 통해 저는 변화에 유연하게 대처하고, 팀의 강점을 이끌어내며, 책임감 있게 일을 완수해 나갑니다. 이러한 강점들이 저의 차별화된 가치입니다.";

// 재사용 가능한 컴포넌트로 분리
const StrengthDetail = memo(({ detail, index, isExpanded }) => (
    <p key={index} className={isExpanded ? 'visible' : 'hidden'}>
        {detail.title}: {detail.content}
    </p>
));

const StrengthItem = memo(({ strength, isExpanded }) => (
    <dl>
        <dt>
            <span className={`bar ${strength.colorClass}`}>&nbsp;</span>
            {strength.id}. {strength.name}
        </dt>
        <dd className={isExpanded ? 'visible' : 'hidden'}>
            {strength.details.map((detail, index) => (
                <StrengthDetail 
                    key={`${strength.id}-${index}`}
                    detail={detail}
                    index={index}
                    isExpanded={isExpanded}
                />
            ))}
        </dd>
    </dl>
));

const Gallup = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded(prev => !prev);
        
        // 모든 상태 변경 시 스크롤 이동
        const titleElement = document.querySelector('.sc__subtitle');
        if (titleElement) {
            titleElement.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    return (
        <div className="sc__container gallup__cont">
            <div className="gallup__blank">
                <h1 className="sc__subtitle">나의 CliftonStrengths® 34 결과</h1>
                <a 
                    href={GALLUP_LINK}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="learn-more-link"
                    aria-label="CliftonStrengths에 대해 더 알아보기"
                >
                    더 알아보기
                </a>
            </div>
            <div className="gallup__desc">
                <div className="gallup__img">
                    <img 
                        alt="Gallup test result" 
                        src={GallupImage}
                        loading="lazy"
                    />
                </div>
                <h2>강점 및 기여</h2>
                <div>{DESCRIPTION_TEXT}</div>
                {strengthsData.map((strength) => (
                    <StrengthItem 
                        key={strength.id} 
                        strength={strength}
                        isExpanded={isExpanded}
                    />
                ))}
                <button 
                    onClick={toggleExpand}
                    className="expand-button"
                    aria-label={isExpanded ? "강점 설명 접기" : "강점 자세히 보기"}
                >
                    {isExpanded ? "설명 접기" : "자세히 보기"}
                </button>
            </div>
        </div>
    );
};

export default memo(Gallup);