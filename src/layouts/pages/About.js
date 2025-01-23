import React from "react";
import Skills from "./Skills";
import ProfileImage from '../../statics/images/img_me_4.png';

const SectionTitle = 'About';
// const NAME = '김고은';
// const EMAIL = 'hing9ugii@gmail.com';
// const LOCATION = '서울 동작구';

const About = () => {
    return (
        <>
            <section id="_about">
                <div>
                    <div className="sc__title">{SectionTitle}</div>
                    <div className="sc__content about__cont">
                        <div><img alt="my_profile_image" src={ProfileImage} /></div>
                        <div className="about__greeting">
                            <div>
                                <p>안녕하세요. 11년차 프론트엔드 개발자 김고은입니다.</p>
                                <p>✅ 11년간 다양한 프로젝트에서 UI/UX 설계와 웹 표준 준수를 기반으로 한 인터페이스 구현을 담당해 왔습니다.</p>
                                <p>✅ 사용자 경험을 최우선으로 고려하며, 성능 최적화와 효율적인 코드 구조 설계에 주력합니다.</p>
                                <p>✅ 웹 접근성과 반응형 디자인을 고려한 웹 서비스 구축에 뛰어난 역량을 보유하고 있습니다.</p>
                                <p>✅ 꼼꼼한 디테일로 품질 높은 결과물을 만들어내는 데 자신 있습니다.</p>
                            </div>
                            <Skills />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default About;

