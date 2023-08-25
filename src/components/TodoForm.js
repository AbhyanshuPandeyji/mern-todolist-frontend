import React from 'react'
import {useState} from "react";

import {useDispatch} from "react-redux";
import { addNewTodo } from './../redux/actions/index';


const Todo = () => { // for initial value none
    const [text, setText] = useState("");
    const [editing , setEditing] = useState(false);

    //intializing the useDispatch 
    const dispatch = useDispatch();



    const onFormSubmit = (e) => {
        // to stop imidiate loding after entering a value
        e.preventDefault();

        // in redux we always dispatch our action we dont directly call our funtions for actions - so import usedispatch
        // now it will directly call the  funtion in it - in this case addNewTodo
        dispatch(addNewTodo(text));

        // set value after adding a new todo
        setText('');

    }

    const onInputChange = (e) => {
        setText(e.target.value)
    }


    return (
        <div>
            <form className='form'
                onSubmit={onFormSubmit}>
                <input type="text" value={text} placeholder='Enter New Todo...' className='input'
                    onChange={onInputChange}/>
            </form>
        </div>
    )
}

export default Todo;
