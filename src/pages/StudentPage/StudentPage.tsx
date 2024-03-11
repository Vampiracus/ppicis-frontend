
import Header from 'components/Header/Header'
import styles from './StudentPage.module.scss'
import TeamInfo from './components/TeamInfo/TeamInfo'
import { useSelectUser } from 'slices/selectors'
import { userStatuses } from '../../types/types'
import NotApproved from './components/NotApproved/NotApproved'

const StudentPage = () => {
    const user = useSelectUser()

    return (
        <>
        <Header />
        <main className={styles.studentPage}>
            {
                user?.status === userStatuses.APPROVED
                ? <TeamInfo />
                : <NotApproved />
            }
        </main>
        </>
    );
};

export default StudentPage