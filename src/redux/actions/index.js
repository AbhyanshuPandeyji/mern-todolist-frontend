// all api calls will be here - it handles our Kind api requests  and response of between our client and server side database
// there are many funtions you can do that 
// 1. request method (been deprecated) , 2. using functions , 3. or you can use axios 
// we are gonna use axios package to make api calls 
import axios from 'axios'
import { ADDNEW_TODO,GETALL_TODO,TOGGLE_TODO,TOGGLE_TAB,UPDATE_TODO,DELETE_TODO } from './type.js';

// our main url 
const API_URL = '/api';


// now api calling first one will be post to post todo data in the storage
// post take minimum 2 arg can take 4 too when  you pass your headers
// first will be url of the backend - on backend it is running http://localhost:8000' port

// this request is going to be use to add todos to the list
// async dispatch is the middleware which is going to
// data is the data that will come when its been passed by the text as input value


// in this funtion api calls should be asynchronous because it is working with the cloud server - 
// for that we use thunk middleware which is going to take the dispatch as our funtion

export const addNewTodo = (data) => async (dispatch) => {
    try {
        // passing main url as string - API_URL
        const res = await axios.post(`${API_URL}/todos`, { data });

        // dispatching action which will ggo to reducer
        // two arg will pass 1st is type because there will be many types of requests to deferentiate the diffrent types of states you are using in crud
        // and second will be payload is to data that you want to set in the redux
        // for type we are not hard coding it we will use constants in different file - action will be use is the of type
        dispatch({ type: ADDNEW_TODO , payload: res.data });
    } catch (error) {
        console.log('Error while calling addNewTodo API ', error.message);
    }
}

// api request for see all todos
export const getAllTodos = () => async (dispatch) => {
    try {
        const res = await axios.get(`${API_URL}/todos`);

        dispatch({ type: GETALL_TODO , payload: res.data });
    } catch (error) {
        console.log('Error while calling getAllTodos API ', error.message);
    }
}


// api request to toggle between if a todo is done or not  from Todo file
export const toggleTodo = (id) => async (dispatch) => {
    try {
        const res = await axios.get(`${API_URL}/todos/${id}`);

        dispatch({ type: TOGGLE_TODO , payload: res.data });
    } catch (error) {
        console.log('Error while calling getAllTodos API ', error.message);
    }
}


// api request to update todo 
export const updateTodo = (id, data) => async (dispatch) => {
    try {

        // give response upon taking the data when the update is done on the todo
        const res = await axios.put(`${API_URL}/todos/${id}`, { data });

        dispatch({ type: UPDATE_TODO , payload: res.data });
    } catch (error) {
        console.log('Error while calling updateTodo API ', error.message);
    }
}


// api request to delete todo - a specific todo
export const deleteTodo = (id) => async (dispatch) => {
    try {
        const res = await axios.delete(`${API_URL}/todos/${id}`);

        dispatch({ type: DELETE_TODO , payload: res.data });
    } catch (error) {
        console.log('Error while calling deleteTodo API ', error.message);
    }
}


// this is to actually be on the different todos type tabs - all todos - active todos - done todos

export const toggleTab = (tab) => async (dispatch) => {
    dispatch({ type: TOGGLE_TAB, selected: tab })
}
