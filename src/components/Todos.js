// This file is to render and display all todos

import { useEffect } from 'react';

import { deleteTodo, getAllTodos } from '../redux/actions/index';
import { ALL_TODOS, DONE_TODOS, ACTIVE_TODOS } from '../redux/actions/type';

import { useDispatch, useSelector } from 'react-redux';

import './Todos.css'


// component
import Todo from './Todo';
import {Tabs} from './Tabs';

// funtion to show all todos
export const Todos = () => {

    const dispatch = useDispatch();

    const todos = useSelector(state => state.todos);
    const currentTab = useSelector(state => state.currentTab);

    // will take all todos and run every time a new todo is been added
    useEffect(() => {
        dispatch(getAllTodos());
    }, [])


    const getTodos = () => {
        if (currentTab === ALL_TODOS) {
            return todos;
        } else if (currentTab === ACTIVE_TODOS) {
            return todos.filter(todo => !todo.done)
        } else if (currentTab === DONE_TODOS) {
            return todos.filter(todo => todo.done)
        }
    }

    const removeDoneTodos = () => {
        todos.forEach(({ done, _id }) => {
            if (done) {
                dispatch(deleteTodo(_id));
            }
        })
    }

    return (
        <article>
            <div>
                <Tabs currentTab={currentTab} />

                {
                    todos.some(todo => todo.done) ? (
                        <button
                            onClick={removeDoneTodos}
                            className="button clear"
                        >Remove Done Todos</button>
                    ) : null    
                }
            </div>

            <ul>
                {
                    // to loop our todos and dispaly in the page
                    getTodos().map(todo => (
                        // it will handle our styling of the todo and working of the todo
                        <Todo 
                            key={todo._id}
                            todo={todo}
                        />
                    ))
                }
            </ul>
        </article>
    )
}

export default Todos;