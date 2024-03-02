import React from 'react'
import styles from './CalendarRect.module.scss'
import { daysShort, months } from '../../../../utils/other'

type Props = {
    global?: boolean
    meeting?: boolean
    date: number
    showMonth?: boolean
    onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const CalendarRect: React.FC<Props> = (props) => {
    const date = new Date(props.date)
    const day = date.toJSON().slice(8, 10)
    return (
        <div className={styles.calndarRect}>
            <span>{props.showMonth || day === '01' ?  months[date.getMonth()] : ''}</span>
            <button
                type='button'
                className={styles.calndarRect__text + ' ' + (props.global ? styles.calndarRect__text_global : '') + ' ' + (props.meeting ? styles.calndarRect__text_meeting : '')}
                onClick={props.onClick}
                title='Посмотреть события на этот день'>
                { day }
            </button>
            <span 
                className={
                    date.getDate() === new Date().getDate() && date.getMonth() === new Date().getMonth()
                    ? styles.calndarRect_today : ''
                }
            >
                {daysShort[date.getDay()]}
            </span>
        </div>
    );
};

export default CalendarRect;