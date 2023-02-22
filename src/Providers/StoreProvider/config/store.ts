import {configureStore} from "@reduxjs/toolkit";
import {StateSchema} from "./StateSchema";
import {counterReducer} from "../../../entities";


export function createReduxStore(initialState?: StateSchema) {
    return configureStore<StateSchema>({
        reducer: {
            counter: counterReducer
        },
        devTools: true,
        preloadedState: initialState,
    })
}

