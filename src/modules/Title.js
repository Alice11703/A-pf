import React from "react";
import { useState, useEffect } from 'react';

const TitleName = ['About', 'Projects', 'Career'];

const IconDot = () => {
    return (
        <span className="ico__dot"> </span>
    );
};

const SectionTitle = () => {
    const [currentTitle, setCurrentTitle] = useState('');

    useEffect(() => {
        const updateTitle = () => {
            const hash = window.location.hash; // 현재 hash 값 가져오기
            if (hash === '#_about') setCurrentTitle(TitleName[0]);
            else if (hash === '#_projects') setCurrentTitle(TitleName[1]);
            else if (hash === '#_career') setCurrentTitle(TitleName[2]);
            else setCurrentTitle('Default Title');
        };

        updateTitle(); // 초기 상태 설정
        window.addEventListener('hashchange', updateTitle); // hash 변경 감지

        return () => {
            window.removeEventListener('hashchange', updateTitle); // cleanup
        };
    }, []); // 빈 배열로 설정하여 한 번만 실행

    return (
        <div className="sc__title">
            <IconDot /> {currentTitle}
        </div>
    );
};

const Title = () => {
    return (
        <>
            <SectionTitle />
        </>
    );
}

export default Title;