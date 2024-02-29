import Card from 'components/Card/Card'
import Modal from 'components/Modal/Modal'
import React from 'react'
import styles from './Calendar.module.scss'
import CalendarRect from './components/CalendarRect/CalendarRect'
import CalendarControls from './components/CalendarControls/CalendarControls'

type Props = {
    defaultModalEl?: React.ReactElement<any, any>
}

const Calendar: React.FC<React.PropsWithChildren<Props>> = ({ children, defaultModalEl }) => {
    const [shownChild, setshownChild] = React.useState<any>(null)

    const today = Date.now(), day = 1000 * 60 * 60 * 24
    const [firstDate, setfirstDate] = React.useState(today - day)

    const dates = new Array(7).fill(firstDate).map((d, i) => d + day * i)
    const kids = React.Children.toArray(children)
    const findKidWDate = (date: number) => {
        return kids.find(kid => {
            return typeof kid !== 'string'
                && typeof kid !== 'number'
                && 'props' in kid
                && 'date' in kid.props
                && (new Date(kid.props.date)).toDateString() === (new Date(date)).toDateString()
        }) || defaultModalEl
    }
    
    return (
        <>
        <Card>
            <h2 style={{textAlign: 'center'}}>Календарь</h2>
            <div className={styles.calendar__rects}>
                {
                    dates.map((d, i) => (
                        <CalendarRect
                            key={d}
                            date={d}
                            showMonth={i === 0}
                            onClick={() => {setshownChild(findKidWDate(d))}}/>
                    ))
                }
            </div>
            <CalendarControls
                next={(x?: number) => setfirstDate(firstDate + day * (x || 1))}
                prev={(x?: number) => setfirstDate(firstDate - day * (x || 1))}/>
        </Card>
        <Modal shown={!!shownChild} setShown={() => setshownChild(false)}>
            { shownChild }
        </Modal>
        </>
    );
};

export default Calendar;