import {
    forwardRef,
    DetailedHTMLProps,
    InputHTMLAttributes,
    ForwardedRef,
} from "react";

import { FieldError, Path, UseFormRegister } from "react-hook-form";

export interface IFormValue {
    name: string;
    firstName: string;
}

interface IInputProps
    extends DetailedHTMLProps<
        InputHTMLAttributes<HTMLInputElement>,
        HTMLInputElement
    > {
    label: Path<IFormValue>;
    register: UseFormRegister<IFormValue>;
    required?: boolean;
    error?: FieldError;
}

const Input = forwardRef(
    (
        { error, register, label }: IInputProps,
        ref: ForwardedRef<HTMLInputElement>
    ): JSX.Element => {
        return (
            <div>
                <input {...register(label)} />
                {error && <span>{error.message}</span>}
            </div>
        );
    }
);

export default Input;
