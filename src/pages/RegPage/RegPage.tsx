import Container from 'components/Container/Container'
import Form from 'components/Form/Form'
import styles from './RegPage.module.scss'
import Button from 'components/Button/Button'
import { Link, useNavigate } from 'react-router-dom'
import { homeURL } from 'url'
import { IRegisterData, register } from 'api/user'
import { mentorForURL, studentForURL } from 'api/url'

const userRoles = {
    'Студент': studentForURL,
    'Ментор': mentorForURL,
} as Record<string, string>

const RegPage = () => {

    const nav = useNavigate()

    const onSubmit = async (formEntries: Record<string, string | File>) => {
        const fe = formEntries as IRegisterData
        fe.role = userRoles[fe.role]
        const res = await register(fe)
        if (res.user) {
            nav('/')
        }
    }

    return (
        <Container>
            <Form.Form class={styles.regform} onSubmit={onSubmit}>
                <h2> Регистрация </h2>
                <Form.SelectField placeholder='Выберите тип пользователя...' name='role' showName='Тип пользователя' options={Object.keys(userRoles)}/>
                <Form.InputField placeholder='Введите логин...' name='login' showName='Логин'/>
                <Form.InputField placeholder='Введите пароль...' name='password' showName='Пароль' type='password'/>
                <Form.InputField placeholder='Введите фамилию...' name='surname' showName='Фамилия'/>
                <Form.InputField placeholder='Введите имя...' name='first_name' showName='Имя'/>
                <Form.InputField placeholder='Введите отчество...' name='second_name' showName='Отчество'/>
                <Form.InputField placeholder='Введите группу / организацию...' name='group' showName='Группа / организация'/>
                <Form.InputField placeholder='Введите ваш телефон / почту / telegram...' name='social' showName='Контакты'/>
                <br/>
                <br/>
                <Link to={homeURL} style={{textDecoration: 'underline'}}>Вход</Link>
                <Button text='Зарегистрироваться!'/>
                <span className={styles.downLink}> Сайт проектной практики <br/>
                    <a href='https://icis.mephi.ru/'>
                        ИИКС НИЯУ МИФИ
                    </a>
                </span>
            </Form.Form>
        </Container>
    );
};

export default RegPage;