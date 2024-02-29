import React from 'react'
import styles from './CalendarControls.module.scss'
import Arrow from '../../../Arrow/Arrow'

type Props = {
    next: (x?: number) => void
    prev: (x?: number) => void
}

const CalendarControls: React.FC<Props> = (props) => {
    return (
        <div className={styles.calendarControls}>
            <Arrow left onClick={() => props.prev()}/>
            <Arrow left large onClick={() => props.prev(7)}/>
            <Arrow large onClick={() => props.next(7)}/>
            <Arrow onClick={() => props.next()}/>
        </div>
    );
};

export default CalendarControls;