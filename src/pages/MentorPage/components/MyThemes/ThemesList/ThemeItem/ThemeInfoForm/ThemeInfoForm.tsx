import Form from 'components/Form/Form'
import Modal from 'components/Modal/Modal'
import styles from './ThemeInfoForm.module.scss'
import React from 'react';
import Button from 'components/Button/Button'
import { changeTheme, postTheme } from 'api/themes'
import { validateThemeDesctiption, validateThemeName } from '../../../../../../../utils/validation'
import { postThemeFile } from 'api/files'
import { fileURL } from 'api/url'

type Props = {
    shown: boolean
    setShown: (x: boolean) => void
    theme?: TTheme
    created: number
    setCreated: (x: number) => void
}

const ThemeInfoForm: React.FC<Props> = (props) => {
    const isChanging = !!props.theme

    const onSubmitCreate: ((formEntries: Record<string, string | File>) => void) = async fe => {
        // @ts-expect-error file is deleted. All properties from TThemeInit are present
        const res = await postTheme({ ...fe, file: undefined })
        
        if (res.theme) {
            props.setCreated(props.created! + 1)
            props.setShown(false)
            const fd = new FormData()
            fd.append('file', fe.file)
            postThemeFile(fd, res.theme.id)
        }
    }

    const onSubmitChange: ((formEntries: Record<string, string | File>) => void) = async fe => {
        // @ts-expect-error file is deleted. All properties from TThemeInit are present
        const res = await changeTheme({ ...fe, file: undefined, id: props.theme!.id })
        
        if (res.status === 200) {
            props.setCreated(props.created! + 1)
            props.setShown(false)
            const fd = new FormData()
            fd.append('file', fe.file)
            postThemeFile(fd, props.theme!.id)
        }
    }

    const options = new Array(11).fill('1').map((_, i) => i as number)
    if (props.theme?.difficulty) {
        options[0] = props.theme.difficulty
    } else {
        options.shift()
    }

    return (
        <Modal shown={props.shown} setShown={props.setShown}>
            <Form.Form class={styles.themeForm} onSubmit={isChanging ? onSubmitChange : onSubmitCreate}>
                <h2> {isChanging ? 'Редактирование темы' : 'Добавление темы'} </h2>
                <Form.InputField
                    placeholder='Введите название темы...'
                    name='name'
                    showName='Название'
                    validationF={validateThemeName}
                    startValue={props.theme?.name}/>
                <Form.InputField
                    placeholder='Введите описание темы...'
                    name='description'
                    showName='Описание'
                    validationF={validateThemeDesctiption}
                    startValue={props.theme?.description}/>
                <Form.SelectField
                    placeholder='Выберите сложность...'
                    name='difficulty'
                    showName='Сложность'
                    options={options}/>
                { props.theme?.slide_id ? <a className={styles.fileLink} href={fileURL(props.theme.slide_id)}>Загруженный файл</a> : ''}
                <br/>
                <Form.FileInput/>
                <br/>
                <br/>
                <Button text={isChanging ? 'Сохранить!' : 'Создать!'}/>
            </Form.Form>
        </Modal>
    );
};

export default ThemeInfoForm;