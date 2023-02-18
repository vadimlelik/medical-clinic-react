import React, {ButtonHTMLAttributes, FC} from 'react';
import {classNames} from "../../lib/classNames/classNames";
import styles from './Button.module.css'

export enum ButtonSize {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl',
}

export enum ButtonTheme {
    CLEAR = 'clear',
    OUTLINE = 'outline',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted',

}


interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    size?: ButtonSize,
    theme?: ButtonTheme,
    square?: boolean;
}

const Button: FC<ButtonProps> = (props) => {

    const {children, className = '', size='', square, theme = '', ...otherProps} = props

    const mods: Record<string, boolean> = {
        [styles[theme]]: true,
        [styles.square]: square,
        [styles[size]]: true,
    };
    return (
        <button className={classNames(styles.Button, mods, [className,])} {...otherProps}>
            {children}
        </button>
    );
};

export default Button;
