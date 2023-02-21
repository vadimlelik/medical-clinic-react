/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import LoginForm from '../../Components/Login/LoginForm'
import RegisterForm from '../../Components/RegisterForm/RegisterForm'
import { classNames } from '../../shared/lib/classNames/classNames'
import styles from './login.module.css'

interface LoginProps {
  className?: string
}

// eslint-disable-next-line no-empty-pattern
const Login = ({}: LoginProps) => {
  const { type } = useParams()
  const [formType, setFormType] = useState<string>(
    type === 'register' ? type : 'login'
  )

  const toggleForm = () => {
    setFormType((prev) => (prev === 'register' ? 'login' : 'register'))
  }

  return (
      <div className={classNames(styles.login, {}, [])}>
          {formType === 'register' ? <RegisterForm /> : <LoginForm />}
          <div>
              <a role="button" onClick={toggleForm}>
                  <p>Dont have account?</p>
              </a>
          </div>
      </div>
  )
}

export default Login
