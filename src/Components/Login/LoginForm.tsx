import { useForm, type SubmitHandler } from 'react-hook-form'
import Input, { type IFormValue } from '../../shared/UI/Input/Input'
import styles from './LoginForm.module.css'

const LoginForm = (): JSX.Element => {
  const { register, handleSubmit } = useForm<IFormValue>()

  const onSubmit: SubmitHandler<IFormValue> = (data, e) => {
    console.log(data)
    e?.target.reset()
  }

  return (
      <div className={styles.Login}>
          {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
          <form onSubmit={handleSubmit(onSubmit)}>
              <Input label="firstName" register={register} required />
              <Input label="name" register={register} required />
              <input type="submit" />
          </form>
      </div>
  )
}

export default LoginForm
