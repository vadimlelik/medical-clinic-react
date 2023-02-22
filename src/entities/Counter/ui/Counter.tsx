import React from 'react';
import {Button} from "../../../shared/UI/Button/Button";
import {useDispatch, useSelector} from "react-redux";
import {counterActions} from "../model/slice/counterSlice";
import {getCounterValue} from "../model/selector/getCounterValue/getCounterValue";

const Counter = () => {
    const dispatch = useDispatch()
    const counterValue = useSelector(getCounterValue)
    const decrement = () => {
        dispatch(counterActions.decrement())
    }
    const increment = () => {
        dispatch(counterActions.increment())
    }
    return (
        <div>
            <p>value:{counterValue}</p>
            <Button onClick={increment}>
                Increment
            </Button>
            <Button onClick={decrement}>
                Decrement
            </Button>
        </div>
    );
};

export default Counter;
