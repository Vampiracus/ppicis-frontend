import React from 'react'
import styles from './CalendarControls.module.scss'
import Arrow from '../../../Arrow/Arrow'

type Props = {
    next: (x?: number) => void
    prev: (x?: number) => void
    year: number
}

const CalendarControls: React.FC<Props> = (props) => {
    return (
        <div className={styles.calendarControls}>
            <Arrow left onClick={() => props.prev()} title='Назад'/>
            <Arrow left large onClick={() => props.prev(7)} title='Назад x7'/>
            <span>{ props.year }</span>
            <Arrow large onClick={() => props.next(7)} title='Вперед x7'/>
            <Arrow onClick={() => props.next()} title='Вперед'/>
        </div>
    );
};

export default CalendarControls;