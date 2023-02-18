import {
    forwardRef,
    DetailedHTMLProps,
    InputHTMLAttributes,
    ForwardedRef,
} from "react";

import {FieldError, Path, UseFormRegister} from "react-hook-form";
import styles from './input.module.css'

export interface IFormValue {
    name: string;
    firstName: string;
}

interface IInputProps
    extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>,
        HTMLInputElement> {
    label: Path<IFormValue>;
    register: UseFormRegister<IFormValue>;
    required?: boolean;
    error?: FieldError;
}

const Input = forwardRef(({error, register, label}: IInputProps, ref: ForwardedRef<HTMLInputElement>): JSX.Element => {
        return (
            <label htmlFor='input'>
                <input {...register(label)} className={styles.input} id='input'/>
                <span className={styles.inputLabel}>{label}</span>
                {error && <span>{error.message}</span>}
            </label>
        );
    }
);

export default Input;
