import React from 'react'
import styles from './CrossButton.module.scss'

type Props = {
    title?: string
    class?: string
    onClick?: React.MouseEventHandler<HTMLButtonElement>
    type?: "button" | "submit" | "reset"
}

const CrossButton: React.FC<Props> = (props) => {
    return (
        <button className={styles.CrossButton + ' ' + (props.class ? props.class : '')} onClick={props.onClick} title={props.title} type={props.type}>
        </button>
    );
};

export default CrossButton;