import React, { PropsWithChildren } from 'react'
import styles from './Header.module.scss'
import { Link } from 'react-router-dom'
import LeaveButton from './LeaveButton/LeaveButton'
import { useSelectSeason, useSelectUser } from 'slices/selectors'

const Header: React.FC<PropsWithChildren> = ({ children }) => {
    const user = useSelectUser()
    const season = useSelectSeason()

    const shortName = user?.surname + ' ' + user?.first_name[0] + '. ' + (user?.second_name ? user.second_name[0] + '.' : '')

    return (
        <header className={styles.header}> 
            <div className={styles.headerSpan}><Link to='/'>Проектная практика</Link></div>
            { children }
            <div style={{flexGrow: 0}}></div>
            <div className={styles.header__controls}>
                <div className={styles.header__controls__info}>
                    <span className={styles.header__controls__info_small}>{season?.name}</span>
                    <span>{shortName}</span>
                    <span className={styles.header__controls__info_small}>{user?.login}</span>
                </div>
                <LeaveButton></LeaveButton>
            </div>
        </header>
    )
}

export default Header