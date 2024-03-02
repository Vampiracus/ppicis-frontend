import Header from 'components/Header/Header'
import MyThemes from './components/MyThemes/MyThemes'
import MyTeams from './components/MyTeams/MyTeams'
import MentorCalendar from './components/MentorCalendar/MentorCalendar'
import styles from './MentorPage.module.scss'

const MentorPage = () => {
    return (
        <>
        <Header />
        <main className={styles.mentorPage}>
            <MentorCalendar />
            <MyTeams />
            <MyThemes />
        </main>
        </>
    );
};

export default MentorPage;