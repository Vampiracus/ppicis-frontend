import React from 'react'
import styles from './ThemeItem.module.scss'

type Props = {
    theme: TTheme
}

const ThemeItem: React.FC<Props> = ({ theme }) => {
    return (
        <a className={styles.themeItem}>
            «{ theme.name }»
        </a>
    );
};

export default ThemeItem;