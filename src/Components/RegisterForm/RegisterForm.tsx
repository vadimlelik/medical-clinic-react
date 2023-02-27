import styles from "../RegisterForm/register.module.css";
import Input, {IFormValue} from "../../shared/UI/Input/Input";
import {SubmitHandler, useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import React, {useCallback} from "react";
import {loginActions} from "../../features/AuthByUser/model/slice/loginSlice";
import {getLoginState} from "../../features/AuthByUser/model/selector/getLoginState/getLoginState";
import {loginByUserName} from "../../features/AuthByUser/model/services/LoginByUserName/loginByUserName";

const RegisterForm = (): JSX.Element => {
    // const {register, handleSubmit} = useForm<IFormValue>()
    //
    // const onSubmit: SubmitHandler<IFormValue> = (data, e) => {
    //     console.log(data)
    //     e?.target.reset()
    // }
    const dispatch = useDispatch()
    const {password, userName} = useSelector(getLoginState)
    const onChangeUserName = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(loginActions.setUserName(e.target.value))
    }, [dispatch])

    const onChangeUserPassword = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(loginActions.setPassword(e.target.value))
    }, [dispatch])

    const onLoginClick = useCallback(() => {
        console.log('click')
        // @ts-ignore
        dispatch(loginByUserName({userName, password}));
    }, [password, userName, dispatch])

    return <div>
        <div className={styles.Register}>
            <h1>RegisterForm</h1>

            {/*<form onSubmit={handleSubmit(onSubmit)}>*/}
            {/*    <Input label="firstName" register={register} required/>*/}
            {/*    <Input label="name" register={register} required/>*/}
            {/*    <input type="submit"/>*/}
            {/*</form>*/}
            <div>
                <input name='name' placeholder='name' value={userName} onChange={onChangeUserName}/>
                <input name='password' placeholder='password' value={password} onChange={onChangeUserPassword}/>


                <button onClick={onLoginClick}>Submit</button>
            </div>

        </div>
    </div>
}

export default RegisterForm
