import { useForm, SubmitHandler } from "react-hook-form";
import Input, { IFormValue } from "../UI/Input/Input";
import styles from "./LoginForm.module.css";

const LoginForm = () => {
    const { register, handleSubmit } = useForm<IFormValue>();

    const onSubmit: SubmitHandler<IFormValue> = (data, e) => {
        console.log(data);
        e?.target.reset();
    };

    return (
        <div className={styles.Login}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Input label="firstName" register={register} required />
                <Input label="name" register={register} required />
                <input type="submit" />
            </form>
        </div>
    );
};

export default LoginForm;
