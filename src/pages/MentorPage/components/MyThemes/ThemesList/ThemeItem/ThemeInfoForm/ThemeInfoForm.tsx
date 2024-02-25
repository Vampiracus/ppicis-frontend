import Form from 'components/Form/Form'
import Modal from 'components/Modal/Modal'
import styles from './ThemeInfoForm.module.scss'
import React from 'react';
import Button from 'components/Button/Button'
import { postTheme } from 'api/themes'
import { validateThemeDesctiption, validateThemeName } from '../../../../../../../utils/validation'
import { postThemeFile } from 'api/files'

type Props = {
    isChangeing?: true
}

const ThemeInfoForm: React.FC<Props> = (props) => {
    const onSubmit: ((formEntries: Record<string, string | File>) => void) = async fe => {
        // @ts-expect-error file is deleted. All properties from TThemeInit are present
        const res = await postTheme({ ...fe, file: undefined })
        
        if (res.theme) {
            // ДОБАВИТЬ ПРОВЕРКУ НА ТО, ЧТО ФАЙЛ УСПЕШНО ЗАГРУЗИЛСЯ!!!
            const fd = new FormData()
            fd.append('file', fe.file)
            postThemeFile(fd, res.theme.id)
        }
    }

    return (
        <Modal>
            <Form.Form class={styles.themeForm} onSubmit={onSubmit}>
                <h2> {props.isChangeing ? 'Редактирование темы' : 'Добавление темы'} </h2>
                <Form.InputField placeholder='Введите название темы...' name='name' showName='Название' validationF={validateThemeName}/>
                <Form.InputField placeholder='Введите описание темы...' name='description' showName='Описание' validationF={validateThemeDesctiption}/>
                <Form.SelectField placeholder='Выберите сложность...' name='difficulty' showName='Сложность' options={new Array(10).fill('1').map((_, i) => i + 1)}/>
                <Form.FileInput/>
                <br/>
                <br/>
                <Button text={props.isChangeing ? 'Сохранить!' : 'Создать!'}/>
            </Form.Form>
        </Modal>
    );
};

export default ThemeInfoForm;