import Card from 'components/Card/Card'
import styles from './MyThemes.module.scss'
import ThemesList from './ThemesList/ThemesList'

const MyThemes = () => {
    return (
        <Card>
            <div className={styles.myThemes}>
                <h3>Мои темы</h3>
                <ThemesList />
            </div>
        </Card>
    );
};

export default MyThemes;