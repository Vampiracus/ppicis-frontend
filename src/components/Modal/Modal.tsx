import React from 'react'
import styles from './Modal.module.scss'
import Container from 'components/Container/Container'

const Modal: React.FC<React.PropsWithChildren> = ({ children }) => {
    return (
        <div className={styles.modal}>
            <Container>
                { children }
            </Container>
        </div>
    );
};

export default Modal;