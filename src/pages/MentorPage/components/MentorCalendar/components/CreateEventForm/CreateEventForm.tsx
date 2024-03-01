import React, { useState } from 'react'
import styles from './CreateEventForm.module.scss'
import Button from 'components/Button/Button'
import Modal from 'components/Modal/Modal'
import TheForm from './TheForm'

const CreateEventForm: React.FC<{ date: number }> = ({ date }) => {
    const [showForm, setshowForm] = useState(false);

    return (
        <>
        <div className={styles.createEventForm__welcome}>
            <h2>{new Date(date).toLocaleDateString()}</h2>  
            <h2>Ничего не запланировано</h2>
            <Button text='Добавить встречу' onClick={() => setshowForm(true)}/>
        </div>
        {
            showForm
            ? (<Modal shown={showForm} setShown={setshowForm}>
                <TheForm date={date}/>
            </Modal>) : ''
        }
        </>
    );
};

export default CreateEventForm;