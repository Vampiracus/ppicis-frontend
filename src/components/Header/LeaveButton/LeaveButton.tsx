import React from 'react'
import styles from './LeaveButton.module.scss'
import { logout } from 'api/user'

const LeaveButton = () => {
    const onClick: React.MouseEventHandler<HTMLButtonElement> = async () => {
        const res = await logout()
        if (res.status === 200) {
            location.reload()
        }
    }

    return (
        <button className={styles.logout} onClick={onClick} title='Выйти'/>
    );
};

export default LeaveButton;