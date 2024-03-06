
import Header from 'components/Header/Header'
import styles from './StudentPage.module.scss'
import TeamInfo from './components/TeamInfo/TeamInfo'

const StudentPage = () => {
    return (
        <>
        <Header />
        <main className={styles.studentPage}>
            <TeamInfo />
        </main>
        </>
    );
};

export default StudentPage