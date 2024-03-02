import React from 'react';
import styles from './Card.module.scss'

const Card: React.FC<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>> = ({ children, ...props }) => {
    return (
        <div {...props} className={styles.card + ' ' + props.className}>
            { children }
        </div>
    );
};

export default Card;