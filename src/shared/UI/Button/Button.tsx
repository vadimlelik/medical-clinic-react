import {type ButtonHTMLAttributes, type DetailedHTMLProps, type FC} from 'react'
import styles from './Button.module.css'
import {classNames} from "../../lib/classNames/classNames";

export enum ButtonTheme {
    CLEAR = 'clear',
    OUTLINE = 'outline',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum ButtonSize {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl',
}

interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    theme?: ButtonTheme
    square?: boolean
    size?: ButtonSize
    disabled?: boolean
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        children,
        theme,
        square,
        disabled,
        size = ButtonSize.M,
        ...otherProps

    } = props
    return (
        <button
            type="button"
            disabled={disabled}
            className={classNames(styles.Button, {
                [styles[theme]]: true,
                [styles[size]]: true,
                [styles.disabled]:disabled


            },[className])}
            {...otherProps}
        >
            {children}
        </button>
    )
}
