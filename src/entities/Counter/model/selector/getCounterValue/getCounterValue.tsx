import {createSelector} from "@reduxjs/toolkit";
import {getCounter} from "../getCounet/getCounter";
import {CounterSchema} from "../../types/counterSchema";

// export const getCounterValue = (state: StateSchema) => state.counter.value


export const getCounterValue = createSelector(getCounter, (counter: CounterSchema) => counter.value)
