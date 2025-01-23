import React, { useState } from 'react';
import Header from './layouts/Header';
import Main from './layouts/Main';
import Footer from './layouts/Footer';

const App = () => {
    const [activeSection, setActiveSection] = useState('');

    return (
        <>
            <Header activeSection={activeSection} /> {/* 현재 섹션 정보를 전달 */}
            <Main setActiveSection={setActiveSection} />
            <Footer />
        </>
    );
};

export default App;