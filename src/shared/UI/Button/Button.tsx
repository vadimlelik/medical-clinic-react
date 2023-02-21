import { type ButtonHTMLAttributes, type DetailedHTMLProps, type FC } from 'react'
import styles from './Button.module.css'
import classNames from 'classnames'

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
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    className,
    children,
    theme,
    square,
    size = ButtonSize.M,
    ...otherProps

  } = props
  return (
      <button
          type="button"
          className={classNames(styles.Button, className, {
            [styles[theme]]: true,
            [styles[size]]: true

          })}
          {...otherProps}
        >
          {children}
      </button>
  )
}
