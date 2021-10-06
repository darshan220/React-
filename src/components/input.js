import React, { useState } from 'react';
import './input.css'
import { useDispatch } from 'react-redux';
import { saveTodo } from '../features/todoslice';

const Input = () => {

    const [input,setInput] = useState('')
    
    const dispatch = useDispatch()

    const addTodo = () => {
        // console.log(input);
        dispatch(saveTodo({
            item: input,
            done:false,
            id:Date.now(),
        }))
    }

    return (
        <div className="input">
            <input value={input} onChange={(e)=> setInput(e.target.value)} type="text"/>
            <button onClick={addTodo}>Add</button>            
        </div>
    );
}

export default Input;