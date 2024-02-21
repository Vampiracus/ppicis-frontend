import Container from 'components/Container/Container'
import Form from 'components/Form/Form'

const AuthPage = () => {
    return (
        <Container>
            <Form.Form>
                <h2> Авторизация </h2>
                <Form.InputField placeholder='Введите логин...' name='login' showName='Логин'/>
                <Form.InputField placeholder='Введите пароль...' name='password' showName='Пароль'/>
            </Form.Form>
        </Container>
    );
};

export default AuthPage;