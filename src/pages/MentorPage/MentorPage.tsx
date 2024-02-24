import Header from 'components/Header/Header'
import React from 'react';
import MyThemes from './components/MyThemes/MyThemes'

const MentorPage = () => {
    return (
        <>
        <Header />
        <main>
            Календарь
            Мои команды
            <MyThemes />
        </main>
        </>
    );
};

export default MentorPage;