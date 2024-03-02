import Card from 'components/Card/Card'
import Modal from 'components/Modal/Modal'
import React, { ReactNode } from 'react'
import styles from './Calendar.module.scss'
import CalendarRect from './components/CalendarRect/CalendarRect'
import CalendarControls from './components/CalendarControls/CalendarControls'

type Props = {
    DefaultModalEl?: React.FC<{ date: number }>
}

const Calendar: React.FC<React.PropsWithChildren<Props>> = ({ children, DefaultModalEl }) => {
    const [shownChildren, setshownChildren] = React.useState<null | React.ReactNode[]>(null)

    const today = Date.now(), day = 1000 * 60 * 60 * 24
    const [firstDate, setfirstDate] = React.useState(today - day)

    const dates = new Array(7).fill(firstDate).map((d, i) => d + day * i)
    const kids = React.Children.toArray(children)
    
    const findKidsWDate = (date: number): null | React.ReactNode[] => {
        const arr = kids.filter(kid => {
            return typeof kid !== 'string'
                && typeof kid !== 'number'
                && 'props' in kid
                && 'date' in kid.props
                && (new Date(kid.props.date)).toDateString() === (new Date(date)).toDateString()
        })
        if (arr.length === 0) {
            return null
        }
        return arr
    }

    function isGlobal(kids: ReactNode[] | null): boolean {
        return !!kids?.find(kid => (typeof kid === 'object'
            && kid !== null
            && 'props' in kid
            && 'isGlobal' in kid.props
            && kid.props.isGlobal))
    }

    function isMeeting(kids: ReactNode[] | null): boolean {
        return !!kids?.find(kid => (typeof kid === 'object'
            && kid !== null
            && 'props' in kid
            && 'isMeeting' in kid.props
            && kid.props.isMeeting))
    }
    
    return (
        <>
        <Card>
            <h2 style={{textAlign: 'center'}}>Календарь</h2>
            <div className={styles.calendar__rects}>
                {
                    dates.map((d, i) => {
                        const kids = findKidsWDate(d)
                            
                        return (
                            <CalendarRect
                                key={d}
                                date={d}
                                showMonth={i === 0}
                                onClick={() => {setshownChildren((kids || []).concat(DefaultModalEl ? <DefaultModalEl key={0} date={d} /> : ''))}}
                                global={isGlobal(kids)}
                                meeting={isMeeting(kids)}
                                />)
                        })
                }
            </div>
            <CalendarControls
                year={new Date(firstDate).getFullYear()}
                next={(x?: number) => setfirstDate(firstDate + day * (x || 1))}
                prev={(x?: number) => setfirstDate(firstDate - day * (x || 1))}/>
        </Card>
        <Modal shown={!!shownChildren} setShown={() => setshownChildren(null)} class={styles.calendar__modal}>
            { shownChildren }
        </Modal>
        </>
    );
};

export default Calendar;