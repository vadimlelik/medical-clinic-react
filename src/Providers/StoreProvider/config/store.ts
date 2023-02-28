import {configureStore} from "@reduxjs/toolkit";
import {StateSchema} from "./StateSchema";
import {counterReducer} from "../../../entities";
import {loginReducer} from "../../../features/AuthByUser/model/slice/loginSlice";
import {userReducer} from "../../../entities/User/model/slice/userSlice";


export function createReduxStore(initialState?: StateSchema) {
    return configureStore<StateSchema>({
        reducer: {
            counter: counterReducer,
            user: userReducer,
            loginForm: loginReducer
        },
        devTools: true,
        preloadedState: initialState,
    })
}

