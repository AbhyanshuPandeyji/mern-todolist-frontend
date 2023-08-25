// this will handle the styling of the data of the render todo in the todos file


import React from 'react'

// always do default export of the main component


import { useState } from "react";

import { toggleTodo, updateTodo } from "../redux/actions";
import { deleteTodo } from "../redux/actions";

import { useDispatch } from "react-redux";

import './Todo.css'



const Todo = ({ todo }) => {

  // using the state when the tab is beign update
    const [editing, setEditing] = useState(false);

    // setting text base on the adding of the todo
    const [text, setText] = useState(todo?.data);

    // intializing dispatch
    const dispatch = useDispatch();


    const onFormSubmit = (e) => {
        e.preventDefault();

        // will set the new state of the todo list
        setEditing(prevState => !prevState);

        dispatch(updateTodo(todo._id, text))
    }

    return (
        // all in the list for the better styling in one line
        <li
            className="task"
            onClick={() => dispatch(toggleTodo(todo._id))}
            style={{
                textDecoration: todo?.done ? 'line-through' : '',
                color: todo?.done ? '#bdc3c7' : '#34495e'
            }}
            data-testid="todo-test"
        >
           {/* for dispalying the data on the todo input box when the action is happening in the todo line */}
            <span style={{ display: editing ? 'none' : '' }}>{todo?.data}</span>

            <form
                style={{ display: editing ? 'inline' : 'none' }}
                onSubmit={onFormSubmit}
            >
              {/* input to edit the todo */}
                <input
                    type="text"
                    value={text}
                    className="edit-todo"
                    onChange={(e) => setText(e.target.value)}
                />
            </form>

            {/* this is for the delete key to handle the delete funtion of the tab */}
            <span className="icon" onClick={() => dispatch(deleteTodo(todo._id))}>
                Delete
            </span>

            {/* this will handle of the updation of the todo */}
            <span className="icon" onClick={() => setEditing(prevState => !prevState)}>
            Update</span>
        </li>
    )
}

export default Todo;