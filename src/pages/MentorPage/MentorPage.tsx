import Header from 'components/Header/Header'
import MyThemes from './components/MyThemes/MyThemes'
import MyTeams from './components/MyTeams/MyTeams'
import MentorCalendar from './components/MentorCalendar/MentorCalendar'

const MentorPage = () => {
    return (
        <>
        <Header />
        <main>
            <MentorCalendar />
            <MyTeams />
            <MyThemes />
        </main>
        </>
    );
};

export default MentorPage;