import React from 'react';
import styles from './Text.module.css'
import {classNames} from "../../lib/classNames/classNames";

interface TextPops {
    className?: string
    title?: string
    text?: string
}


export const Text = ({className, text, title}: TextPops) => {
    return (
        <div className={classNames(styles.Text, {}, [className])}>
            {title && <p className={styles.title}>{title}</p>}
            {text && <p className={styles.text}>{text}</p>}
        </div>
    );
};
