import React, { useEffect } from 'react'
import styles from './ThemesList.module.scss'
import ThemeItem from './ThemeItem/ThemeItem'
import { getMyThemes } from 'api/themes'
import NewThemeControls from './ThemeItem/ThemeInfoForm/NewThemeControls'

const ThemesList = () => {
    const [themes, setThemes] = React.useState<TTheme[]>([])
    const [createdThemes, setCreatedThemes] = React.useState<number>(0);

    useEffect(() => {
        (async function () {
            const res = await getMyThemes()
            if (res.themes) {
                setThemes(res.themes)
            }
        })()
    }, [createdThemes])

    return (
        <>
        <div className={styles.themesList}>
            { themes.map(theme => <ThemeItem key={theme.id} theme={theme} setChanged={setCreatedThemes} changed={createdThemes}></ThemeItem>)}
        </div>
        <NewThemeControls created={createdThemes} setCreated={setCreatedThemes}/>
        </>
    );
};

export default ThemesList;