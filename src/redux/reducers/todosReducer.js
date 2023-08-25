// remember you cannot pass the funtion in it as the empty otherwise the error will throw
// import this todo reducer in the store to use as key value pair object
// It handles our client side data base for the api requests - take old state and change to new one accordingly

// action type is being taking every type of value of type of action to be performed
import * as actionTypes from '../actions/type.js';

// dispatch sended the object which will be used here - the state will be you previous value which is not update and second argument will be the action
// action is  defining which type of action to perform indicated by the dispatch -  it send the whole body in action argument
// to not have an undefined array we are using the empty array
export const todosReducers = (state = [], action) => {
    // to switch between different cases of the reducer/  states


    // action will take type of action to perform to give us required output
    switch (action.type) { // in case of todo is been added
        case actionTypes.ADDNEW_TODO:
            // payload is the respose from the api and pread state because it will be an array
            return [
                action.payload,
                ...state
            ]

            // incase we want to see all todos
        case actionTypes.GETALL_TODO:
            return action.payload

            // in case we are switching between different tabs of the todos
        case actionTypes.TOGGLE_TODO:
            return state.map(todo => (todo._id === action.payload._id ? {
                ...todo,
                done: !todo.done
            } : todo))


            // in case we want to update a todo in the list
        case actionTypes.UPDATE_TODO:
            return state.map(todo => (todo._id === action.payload._id ? {
                ...todo,
                data: action.payload.data
            } : todo))

            // in case we want to delete a todo from the list
        case actionTypes.DELETE_TODO:
            return state.filter(todo => todo._id !== action.payload._id);

        default:
            return state;
    }
}


// now goto  actions there will be all api calls crud will be made
