import {CounterSchema} from "../../../entities";
import {LoginSchema} from "../../../features/AuthByUser/model/types/LoginSchema";
import {UserSchema} from "../../../entities/User/model/types/UserSchema";


export interface StateSchema {
    counter: CounterSchema
    user: UserSchema,
    loginForm?: LoginSchema
}
