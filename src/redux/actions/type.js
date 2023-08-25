// using this file to send the constants througout the states as type of vlaue you provide to which
// rather than hard coding we are defining them into this file to use it  - better practice
// it will benefit in the reducer
// it just the constants for our API request to Differentiate in the dispatcher of the request
export const ADDNEW_TODO = 'ADDNEW_TODO';
export const GETALL_TODO = 'GETALL_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';
export const DELETE_TODO = 'DELETE_TODO';

// type of the toggle to be dispatchv 
export const TOGGLE_TAB = 'TOGGLE_TAB';


// this is to intercat with todos constans to goto different tabs of the todos
export const ALL_TODOS = 'All Todos';
export const ACTIVE_TODOS = 'Active Todos';
export const DONE_TODOS = 'Done Todos';
export const TABS = [ALL_TODOS, ACTIVE_TODOS, DONE_TODOS];