import {CounterSchema} from "../../../entities";
import {LoginSchema} from "../../../features/AuthByUser/model/types/LoginSchema";


export interface StateSchema {
    counter: CounterSchema
    loginForm?:LoginSchema
}
