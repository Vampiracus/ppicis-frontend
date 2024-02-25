import React from 'react'
import styles from './ThemeItem.module.scss'
import ThemeInfoForm from './ThemeInfoForm/ThemeInfoForm'

type Props = {
    theme: TTheme
}

const ThemeItem: React.FC<Props> = ({ theme }) => {
    return (
        <>
        <ThemeInfoForm />
        <a className={styles.themeItem}>
            «{ theme.name }»
        </a>
        </>
    );
};

export default ThemeItem;