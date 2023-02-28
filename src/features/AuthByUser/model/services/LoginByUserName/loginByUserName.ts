import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {User} from "../../types/User";


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
            return response.data
        } catch (e) {
            thunkAPI.rejectWithValue('error')
        }
    }
)
