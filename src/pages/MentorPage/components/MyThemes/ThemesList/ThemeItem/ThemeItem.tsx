import React from 'react'
import styles from './ThemeItem.module.scss'
import ThemeInfoForm from './ThemeInfoForm/ThemeInfoForm'

type Props = {
    theme: TTheme
}

const ThemeItem: React.FC<Props> = ({ theme }) => {
    const [showInfo, setShowInfo] = React.useState(false);

    return (
        <>
        <ThemeInfoForm shown={showInfo} setShown={setShowInfo}/>
        <a className={styles.themeItem} onClick={() => setShowInfo(true)}>
            «{ theme.name }»
        </a>
        </>
    );
};

export default ThemeItem;