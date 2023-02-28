import styles from "../RegisterForm/register.module.css";

import {useDispatch, useSelector} from "react-redux";
import React, {useCallback} from "react";
import {loginActions} from "../../features/AuthByUser/model/slice/loginSlice";
import {getLoginState} from "../../features/AuthByUser/model/selector/getLoginState/getLoginState";
import {loginByUserName} from "../../features/AuthByUser/model/services/LoginByUserName/loginByUserName";
import {Button} from "../../shared/UI/Button/Button";
import {Text} from '../../shared/UI/Text/Text'

const RegisterForm = (): JSX.Element => {

    const dispatch = useDispatch()
    const {username, password, error, isLoading} = useSelector(getLoginState)

    const onChangeUserName = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(loginActions.setUserName(e.target.value))
    }, [dispatch])

    const onChangeUserPassword = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(loginActions.setPassword(e.target.value))
    }, [dispatch])

    const onLoginClick = useCallback(() => {
        // @ts-ignore
        dispatch(loginByUserName({username, password}));
    }, [password, username, dispatch])

    return <div>
        <div className={styles.Register}>

            <Text title='Форма Авторнизации'/>

            <div>

                {error && <Text text={error}/>}
                <input name='name' placeholder='name' value={username} onChange={onChangeUserName}/>
                <input name='password' placeholder='password' value={password} onChange={onChangeUserPassword}/>
                <Button onClick={onLoginClick} disabled={isLoading}> Submit </Button>

            </div>

        </div>
    </div>
}

export default RegisterForm
