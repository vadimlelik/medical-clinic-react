// import { useForm, type SubmitHandler } from 'react-hook-form'
// import Input, { type IFormValue } from '../../shared/UI/Input/Input'
import styles from './LoginForm.module.css'

const LoginForm = (): JSX.Element => {
    // const { register, handleSubmit } = useForm<IFormValue>()
    //
    // const onSubmit: SubmitHandler<IFormValue> = (data, e) => {
    //   console.log(data)
    //   e?.target.reset()
    // }

    return (
        <div className={styles.Login}>
            <h1>LoginForm</h1>

            {/*<form onSubmit={handleSubmit(onSubmit)}>*/}
            {/*    <Input label="firstName" register={register} required />*/}
            {/*    <Input label="name" register={register} required />*/}
            {/*    <input type="submit" />*/}
            {/*</form>*/}


            <form>
                <input name='name' placeholder='name' value='' onChange={()=>{}} />
                <input name='password' placeholder='password' value='' onChange={()=>{}} />
            </form>
        </div>
    )
}

export default LoginForm
