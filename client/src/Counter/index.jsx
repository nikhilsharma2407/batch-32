import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { useSelector, useDispatch } from "react-redux"
import { decrementActionCreator, incrementActionCreator, resetActionCreator } from '../reducers/countReducer';

function Counter() {
    const count = useSelector(state => state.count);
    const dispatch = useDispatch();

    const [value, setValue] = useState(1);

    return (
        <>
            <h1>{count}</h1>
            <input type="number" onChange={e => setValue(+e.target.value)} />
            <br />
            <Button variant='outline-primary' onClick={() => dispatch(incrementActionCreator(value))} >Increment</Button>
            <Button variant='outline-danger' onClick={() => dispatch(decrementActionCreator(value))} >Decrement</Button>
            <Button variant='outline-primary' onClick={() => dispatch(resetActionCreator())} >Reset</Button>
        </>
    )
}

export default Counter