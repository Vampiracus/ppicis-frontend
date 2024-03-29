import React from 'react'
import styles from './Modal.module.scss'
import Card from 'components/Card/Card'

const Modal: React.FC<React.PropsWithChildren<{ shown: boolean, setShown: (x: boolean) => void, class?: string }>> = (props) => {

    if (!props.shown) {
        return <></>
    }

    return (
        <div className={styles.modal} onClick={() => props.setShown(false)}>
            <Card className={styles.modal__content + ' ' + (props.class ? props.class : '')} onClick={e => e.stopPropagation()}>
                { props.children }
            </Card>
        </div>
    );
};

export default Modal;