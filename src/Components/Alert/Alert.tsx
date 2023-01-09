import React, {useEffect} from 'react';
import {AlertProps} from "./AlertProps";
import styles from './Alert.module.css'
import cn from 'classnames'

const Alert = ({className, name, closeAlert}: AlertProps): JSX.Element => {


    useEffect(() => {
        const timer = setTimeout(closeAlert, 3000)
        return () => {
            clearTimeout(timer)
        }
    }, [name])


    return (
        <div className={cn(styles.toastContainer, className)}>
            <div className={cn(styles.toast)}>{name} </div>
        </div>
    );
};

export default Alert;