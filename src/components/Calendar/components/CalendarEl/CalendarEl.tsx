import React from 'react'

type Props = {
    date: number
    isGlobal?: boolean
    isMeeting?: boolean
}

const CalendarEl: React.FC<React.PropsWithChildren<Props>> = (props) => {
    return (
        <>
          {props.children}  
        </>
    );
};

export default CalendarEl;