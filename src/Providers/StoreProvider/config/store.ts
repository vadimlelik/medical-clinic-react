import {configureStore} from "@reduxjs/toolkit";
import {StateSchema} from "./StateSchema";
import {counterReducer} from "../../../entities";
import {loginReducer} from "../../../features/AuthByUser/model/slice/loginSlice";


export function createReduxStore(initialState?: StateSchema) {
    return configureStore<StateSchema>({
        reducer: {
            counter: counterReducer,
            loginForm: loginReducer
        },
        devTools: true,
        preloadedState: initialState,
    })
}

