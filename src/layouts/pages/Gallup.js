import React, { memo } from "react";
import GallupImage from '../../statics/images/img_gallup.png';

const strengthsData = [
    {
        id: 1,
        name: "탁월성 추구 (Maximizer)",
        colorClass: "bar__orange",
        details: [
            {
                title: "강점",
                content: "탁월성을 추구하며, 강점을 최대한 활용해 최고의 성과를 이끌어냅니다."
            },
            {
                title: "적용",
                content: "다른 사람들의 강점을 발견하고 이를 잘 활용해 팀과 조직의 성과를 최상으로 끌어올립니다."
            },
            {
                title: "가치",
                content: "질적 성과를 중요시하며, 완벽한 결과를 위해 끊임없이 노력합니다."
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
                content: "변화하는 환경에 유연하게 대응하며, 현재에 집중해 최적의 결과를 만들어냅니다."
            },
            {
                title: "적용",
                content: "빠르게 변하는 상황에서도 안정감을 유지하고, 효율적으로 업무를 조정합니다."
            },
            {
                title: "가치",
                content: "예상치 못한 상황에도 빠르게 적응하여 팀을 안정적으로 이끌 수 있습니다."
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
                content: "깊고 신뢰할 수 있는 관계를 형성합니다."
            },
            {
                title: "적용",
                content: "신뢰를 바탕으로 긴밀한 관계를 맺고, 협력적인 분위기 속에서 최고의 성과를 도출합니다."
            },
            {
                title: "가치",
                content: "진정성과 신뢰를 바탕으로 팀워크와 커뮤니케이션을 강화합니다."
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
                content: "팀원들의 개별적 특성을 파악하여 역할을 최적화하고, 협업을 더욱 강화합니다."
            },
            {
                title: "가치",
                content: "개인의 특성을 존중하고, 그에 맞는 최적의 접근 방식을 통해 높은 성과를 창출합니다."
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
                content: "맡은 임무에 대해 강한 책임감을 가지며, 약속을 반드시 지킵니다."
            },
            {
                title: "적용",
                content: "프로젝트나 업무에서 맡은 바를 성실히 이행해 신뢰를 쌓고, 결과를 보장합니다."
            },
            {
                title: "가치",
                content: "신뢰받는 사람으로서 팀의 안정성과 성과를 책임집니다."
            }
        ]
    }
];

// 상수 분리
const GALLUP_LINK = "https://www.gallup.com/cliftonstrengths/ko";
const DESCRIPTION_TEXT = "이 강점들은 제가 맡은 일에서 최상의 결과를 도출하고, 협력과 신뢰를 바탕으로 성과를 극대화하는 데 중요한 역할을 합니다. 각 강점을 통해 저는 변화에 유연하게 대처하고, 팀의 강점을 이끌어내며, 책임감 있게 일을 완수해 나갑니다. 이러한 강점들이 저의 차별화된 가치입니다.";

// 재사용 가능한 컴포넌트로 분리
const StrengthDetail = memo(({ detail, index }) => (
    <p key={index}>
        {detail.title}: {detail.content}
    </p>
));

const StrengthItem = memo(({ strength }) => (
    <dl>
        <dt>
            <span className={`bar ${strength.colorClass}`}>&nbsp;</span>
            {strength.id}. {strength.name}
        </dt>
        <dd>
            {strength.details.map((detail, index) => (
                <StrengthDetail
                    key={`${strength.id}-${index}`}
                    detail={detail}
                    index={index}
                />
            ))}
        </dd>
    </dl>
));

const Gallup = () => {
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
                <h4>강점 및 기여</h4>
                <p>{DESCRIPTION_TEXT}</p>
                {strengthsData.map((strength) => (
                    <StrengthItem
                        key={strength.id}
                        strength={strength}
                    />
                ))}
            </div>
        </div>
    );
};

export default memo(Gallup);