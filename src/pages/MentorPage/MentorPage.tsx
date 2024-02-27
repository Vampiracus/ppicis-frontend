import Header from 'components/Header/Header'
import MyThemes from './components/MyThemes/MyThemes'
import MyTeams from './components/MyTeams/MyTeams'

const MentorPage = () => {
    return (
        <>
        <Header />
        <main>
            Календарь
            <MyTeams />
            <MyThemes />
        </main>
        </>
    );
};

export default MentorPage;