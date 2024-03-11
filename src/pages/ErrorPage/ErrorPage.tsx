import Container from 'components/Container/Container'

const ErrorPage = () => {
    return (
        <Container>
            <p style={{textAlign: 'center'}}>Похоже, сервер лежит</p> <br/>
            <svg>
                <circle cx={147} cy={55} r={50} fill='rgba(0,0,0,0)' stroke='white' strokeWidth={5}/>
                <path d="M120 50 l 10 -10 l 10 10" stroke="white" fill="transparent" stroke-width="5"/>
                <path d="M150 50 l 10 -10 l 10 10" stroke="white" fill="transparent" stroke-width="5"/>
                <path d="M130 80 c 10 -10 20 -10 30 0" stroke="white" fill="transparent" stroke-width="5"/>
            </svg>
            <p style={{textAlign: 'center'}}>Попробуйте обновить <br/> страницу или прийти позже</p>
        </Container>
    );
};

export default ErrorPage;