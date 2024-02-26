import Form from 'components/Form/Form'
import Modal from 'components/Modal/Modal'
import styles from './ThemeInfoForm.module.scss'
import React from 'react';
import Button from 'components/Button/Button'
import { postTheme } from 'api/themes'
import { validateThemeDesctiption, validateThemeName } from '../../../../../../../utils/validation'
import { postThemeFile } from 'api/files'

type Props = {
    shown: boolean
    setShown: (x: boolean) => void
    theme?: TTheme
}

const ThemeInfoForm: React.FC<Props> = (props) => {
    const [ isChangeing, setIsChangeing ] = React.useState(!!props.theme)
    const [ theme, setTheme ] = React.useState(props.theme || null)

    const onSubmitCreate: ((formEntries: Record<string, string | File>) => void) = async fe => {
        // @ts-expect-error file is deleted. All properties from TThemeInit are present
        const res = await postTheme({ ...fe, file: undefined })
        
        if (res.theme) {
            setIsChangeing(true)
            setTheme(res.theme)
            const fd = new FormData()
            fd.append('file', fe.file)
            postThemeFile(fd, res.theme.id)
        }
    }

    const onSubmitChange: ((formEntries: Record<string, string | File>) => void) = async fe => {
        console.log(fe)
    }

    return (
        <Modal shown={props.shown} setShown={props.setShown}>
            <Form.Form class={styles.themeForm} onSubmit={isChangeing ? onSubmitChange : onSubmitCreate}>
                <h2> {isChangeing ? 'Редактирование темы' : 'Добавление темы'} </h2>
                <Form.InputField
                    placeholder={theme ? theme.name : 'Введите название темы...'}
                    name='name'
                    showName='Название'
                    validationF={validateThemeName}/>
                <Form.InputField placeholder='Введите описание темы...' name='description' showName='Описание' validationF={validateThemeDesctiption}/>
                <Form.SelectField placeholder='Выберите сложность...' name='difficulty' showName='Сложность' options={new Array(10).fill('1').map((_, i) => i + 1)}/>
                <Form.FileInput/>
                <br/>
                <br/>
                <Button text={isChangeing ? 'Сохранить!' : 'Создать!'}/>
            </Form.Form>
        </Modal>
    );
};

export default ThemeInfoForm;