import Card from 'components/Card/Card'
import styles from './MyThemes.module.scss'
import Button from 'components/Button/Button'
import ThemesList from './ThemesList/ThemesList'

const MyThemes = () => {
    return (
        <Card>
            <div className={styles.myThemes}>
                <h3>Мои темы</h3>
                <ThemesList />
                <Button title='Добавить новую тему' text='Добавить тему'/>
            </div>
        </Card>
    );
};

export default MyThemes;