import React, {useState} from 'react'

import {useSelector, useDispatch} from 'react-redux';
import {decrement, increment, incrementByAmount} from './counterSlice';

export default function Counter() {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()
    const [incrementAmount, setIncrementAmount] = useState(0)


    return (
        <div>
            <h3>Count: {count}</h3>
            <div>
                <button onClick={() => dispatch(increment())}>Plus 1</button>
                <button onClick={() => dispatch(decrement())}>Minus 1</button>
                <input onChange={e => setIncrementAmount(parseInt(e.target.value))} type='number' value={incrementAmount}/>
                <button onClick={() => dispatch(incrementByAmount(incrementAmount))}>Increment By</button>
            </div>
        </div>
    )
}