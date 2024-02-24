import React from 'react'
import styles from './LeaveButton.module.scss'
import { logout } from 'api/user'
import { useDispatch } from 'react-redux'
import { setUserData } from 'slices/userSlice'

const LeaveButton = () => {
    const dispatch = useDispatch()

    const onClick: React.MouseEventHandler<HTMLButtonElement> = async () => {
        const res = await logout()
        if (res.status === 200) {
            dispatch(setUserData(null))
        }
    }

    return (
        <button className={styles.logout} onClick={onClick}/>
    );
};

export default LeaveButton;