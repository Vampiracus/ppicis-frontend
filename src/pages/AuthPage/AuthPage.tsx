import Container from 'components/Container/Container'
import Form from 'components/Form/Form'
import styles from './AuthPage.module.scss'
import Button from 'components/Button/Button'
import { IAuth, authenticate } from '../../api/user'

const AuthPage = () => {

    const onSubmit = (formEntries: Record<string, string | File>) => {
        const fe = formEntries as IAuth
        authenticate(fe)
    }

    return (
        <Container>
            <Form.Form class={styles.authform} onSubmit={onSubmit}>
                <h2> Авторизация </h2>
                <div>
                    <Form.InputField placeholder='Введите логин...' name='login' showName='Логин'/>
                    <Form.InputField placeholder='Введите пароль...' name='password' showName='Пароль' type='password'/>
                    <Form.CheckInput name='rememberme' showName='Запомнить меня'/>
                </div>
                <div>
                    <a href='/register' style={{textDecoration: 'underline'}}>Регистрация</a>
                    <Button text='Войти'/>
                    <a className={styles.downLink} href='https://icis.mephi.ru/'>
                        Сайт проектной практики <br/>
                        ИИКС НИЯУ МИФИ
                    </a>
                </div>
            </Form.Form>
        </Container>
    );
};

export default AuthPage;