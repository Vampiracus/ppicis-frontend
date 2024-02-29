import React from 'react'
import styles from './Arrow.module.scss'

const Arrow: React.FC<{ left?: boolean, large?: boolean, onClick?: React.MouseEventHandler<HTMLButtonElement> }> = ({ left, onClick, large }) => {
    return (
        <button
            className={styles.arrow + ' ' + (left ? styles.arrow_left : '') + ' ' + (large ? styles.arrow_large : '')}
            onClick={onClick}/>
    );
};

export default Arrow;