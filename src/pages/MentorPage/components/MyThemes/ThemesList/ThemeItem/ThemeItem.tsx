import React from 'react'
import styles from './ThemeItem.module.scss'
import ThemeInfoForm from './ThemeInfoForm/ThemeInfoForm'

type Props = {
    theme: TTheme
    changed: number
    setChanged: (x: number) => void
}

const ThemeItem: React.FC<Props> = (props) => {
    const [showInfo, setShowInfo] = React.useState(false);

    return (
        <>
        <ThemeInfoForm
            shown={showInfo}
            setShown={setShowInfo}
            theme={props.theme}
            created={props.changed}
            setCreated={props.setChanged}/>
        <a className={styles.themeItem} onClick={() => setShowInfo(true)}>
            «{ props.theme.name }»
        </a>
        </>
    );
};

export default ThemeItem;