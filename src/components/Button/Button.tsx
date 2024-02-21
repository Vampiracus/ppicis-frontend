import React from 'react'
import styles from './Button.module.scss'

type Props = {
    title?: string
    text?: string
    class?: string
    onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const Button: React.FC<Props> = (props) => {
    return (
        <button className={styles.button} onClick={props.onClick}>
            { props.text }
        </button>
    );
};

export default Button;