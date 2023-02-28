import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {User} from "../../types/User";
import {userActions} from "../../../../../entities/User/model/slice/userSlice";


interface LoginByUserNameProps {
    username: string,
    password: string
}


export const loginByUserName = createAsyncThunk<User, LoginByUserNameProps>(
    'login/loginByUserName',

    async ({username, password}, thunkAPI) => {
        try {
            const response = await axios.post<User>('http://localhost:8000/login', {
                username, password
            })
            if (!response) {
                throw new Error()
            }

            // @ts-ignore
            thunkAPI.dispatch(userActions.setAuthData(response.data))
            return response.data
        } catch (e) {
            return thunkAPI.rejectWithValue('Вы ввели неверный логин и пароль')
        }
    }
)
