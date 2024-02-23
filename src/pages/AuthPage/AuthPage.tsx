import Container from 'components/Container/Container'
import Form from 'components/Form/Form'
import styles from './AuthPage.module.scss'
import Button from 'components/Button/Button'
import { IAuth, authenticate } from '../../api/user'
import { Link } from 'react-router-dom'
import { signupURL } from 'url'

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
                    <Link to={signupURL} style={{textDecoration: 'underline'}}>Регистрация</Link>
                    <Button text='Войти!'/>
                    <span className={styles.downLink}> Сайт проектной практики <br/>
                        <a href='https://icis.mephi.ru/'>
                            ИИКС НИЯУ МИФИ
                        </a>
                    </span>
                </div>
            </Form.Form>
        </Container>
    );
};

export default AuthPage;