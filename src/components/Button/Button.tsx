import React from 'react'
import styles from './Button.module.scss'

type Props = {
    title?: string
    text?: string
    class?: string
    onClick?: React.MouseEventHandler<HTMLButtonElement>
    type?: "button" | "submit" | "reset"
}

const Button: React.FC<Props> = (props) => {
    return (
        <button className={styles.button} onClick={props.onClick} title={props.title} type={props.type}>
            { props.text }
        </button>
    );
};

export default Button;