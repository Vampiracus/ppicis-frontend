import React, { useEffect } from 'react'
import styles from './ThemesList.module.scss'
import ThemeItem from './ThemeItem/ThemeItem'
import { getMyThemes } from 'api/themes'

const ThemesList = () => {
    const [themes, setThemes] = React.useState<TTheme[]>([])

    useEffect(() => {
        (async function () {
            const res = await getMyThemes()
            if (res.themes) {
                setThemes(res.themes)
            }
        })()
    }, [])

    return (
        <div className={styles.themesList}>
            { themes.map(theme => <ThemeItem key={theme.id} theme={theme}></ThemeItem>)}
        </div>
    );
};

export default ThemesList;