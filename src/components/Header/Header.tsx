import React, { PropsWithChildren } from 'react'
import styles from './Header.module.scss'
import { Link } from 'react-router-dom'
import LeaveButton from './LeaveButton/LeaveButton'
import { useSelectSeason, useSelectUser } from 'slices/selectors'
import { shortName } from '../../utils/other'
import { userStatuses } from '../../types/types'

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
                    <span className={styles.header__controls__info_small} title='Ваш логин'>
                        {user?.login}
                        {
                            user?.status === userStatuses.APPROVED
                            ? <span title='Ваш аккаунт подтвержден модератором' style={{color: 'green', fontWeight: 900}}>✓</span>
                            : <span title='Ваш аккаунт не подтвержден модератором' style={{color: 'red'}}>X</span>
                        }
                    </span>
                </div>
                <LeaveButton />
            </div>
        </header>
    )
}

export default Header