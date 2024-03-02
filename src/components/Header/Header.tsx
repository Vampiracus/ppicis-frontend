import React, { PropsWithChildren } from 'react'
import styles from './Header.module.scss'
import { Link } from 'react-router-dom'
import LeaveButton from './LeaveButton/LeaveButton'
import { useSelectSeason, useSelectUser } from 'slices/selectors'
import { shortName } from '../../utils/other'

const Header: React.FC<PropsWithChildren> = ({ children }) => {
    const user = useSelectUser()
    const season = useSelectSeason()

    return (
        <header className={styles.header}> 
            <div className={styles.headerSpan}><Link to='/'>Проектная практика</Link></div>
            { children }
            <div style={{flexGrow: 0}}></div>
            <div className={styles.header__controls}>
                <div className={styles.header__controls__info}>
                    <span className={styles.header__controls__info_small}>{season?.name}</span>
                    <span>{shortName(user!)}</span>
                    <span className={styles.header__controls__info_small}>{user?.login}</span>
                </div>
                <LeaveButton></LeaveButton>
            </div>
        </header>
    )
}

export default Header