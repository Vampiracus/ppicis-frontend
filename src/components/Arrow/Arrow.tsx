import React from 'react'
import styles from './Arrow.module.scss'

type Props = {
    left?: boolean
    large?: boolean
    onClick?: React.MouseEventHandler<HTMLButtonElement>
    title: string
}

const Arrow: React.FC<Props> = ({ left, onClick, large, title }) => {
    return (
        <button
            className={styles.arrow + ' ' + (left ? styles.arrow_left : '') + ' ' + (large ? styles.arrow_large : '')}
            onClick={onClick}
            title={title}/>
    );
};

export default Arrow;