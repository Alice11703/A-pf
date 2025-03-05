import React from "react";
import Skills from "./Skills";
import Gallup from "./Gallup";
import ProfileImage from '../../statics/images/img_me_4.png';

// const IconCheck = () => {
//     return (
//         <span className="ico__check"> </span>
//     );
// }
const IconHands = () => {
    return (
        <span className="ico__hands"> </span>
    );
}

const About = () => {
    return (
        <>
            <div className="sc__content about__cont">
                <div className="about__img">
                    <img alt="my_profile_image" src={ProfileImage} />
                    <IconHands />
                </div>
                <div className="about__greeting">
                    <div className="about__desc">
                        <h1><span>안녕하세요.</span> 11년차 UI/UX Publisher 김고은입니다 <IconHands /></h1>
                        <p>11년간 다양한 프로젝트에서 UI/UX 설계와 웹 표준 준수를 기반으로 한 인터페이스 구현을 담당해 왔습니다</p>
                        <p>사용자 경험을 최우선으로 고려하며, 성능 최적화와 효율적인 코드 구조 설계에 주력합니다</p>
                        <p>웹 접근성과 반응형 디자인을 고려한 웹 서비스 구축에 뛰어난 역량을 보유하고 있습니다</p>
                        <p>꼼꼼한 디테일로 품질 높은 결과물을 만들어내는 데 자신 있습니다</p>
                    </div>
                    <Skills />
                </div>
            </div>
            <Gallup />
        </>
    );
}

export default About;

