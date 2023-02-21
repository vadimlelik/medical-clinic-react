import React from 'react';
import {Button} from "../../../shared/UI/Button/Button";
import {useDispatch} from "react-redux";
import {counterActions} from "../model/slice/counterSlice";

const Counter = () => {
    const dispatch = useDispatch()
    const decrement = () => {
        dispatch(counterActions.decrement)
    }
    const increment = () => {
        dispatch(counterActions.increment)
    }
    return (
        <div>
            <p>value</p>
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
