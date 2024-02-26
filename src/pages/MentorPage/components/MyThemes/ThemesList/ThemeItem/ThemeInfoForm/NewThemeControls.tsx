import Button from 'components/Button/Button'
import React from 'react';
import ThemeInfoForm from './ThemeInfoForm'

type Props = {
    created: number
    setCreated: (x: number) => void
}

const NewThemeControls: React.FC<Props> = ({ created, setCreated }) => {
    const [showForm, setShowForm] = React.useState(false);

    return (
        <>
        <Button
            title='Добавить новую тему'
            text='Добавить тему'
            onClick={() => { setShowForm(true) }}/>
        <ThemeInfoForm shown={showForm} setShown={setShowForm} created={created} setCreated={setCreated}/>
        </>
    );
};

export default NewThemeControls;