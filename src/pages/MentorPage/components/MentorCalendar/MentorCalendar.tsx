import Calendar from 'components/Calendar/Calendar'

const MentorCalendar = () => {
    return (
        <Calendar defaultModalEl={<p>s123</p>}>
            <span date={Date.now()}>span1</span>
            <span>span2</span>
            <p>p1</p>
            <></>
        </Calendar>
    );
};

export default MentorCalendar;