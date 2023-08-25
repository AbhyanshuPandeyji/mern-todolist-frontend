// to store states  - its the database for the front end 
// helps in manageing state when project becomes complex
// the line on the createStore doesnt mean its been depricated - you can use redux too kit instead
// use apply middleware to use the middleware funtion in devtools
import { createStore, combineReducers, applyMiddleware } from 'redux';

// second arg for create store - it will work as the compose of the middleware 
// install by npm i redux-devtool-extension
import { composeWithDevTools } from 'redux-devtools-extension';

// to import thunk
import thunk from 'redux-thunk'

import { todosReducers } from './reducers/todosReducer.js';


import { tabReducer } from './reducers/tabReducers';




// intialize it - sigle reducer - it takes an argumment as an object 
// and in that object youi can make mutipel key value pair reducer how many you want
// once created you need to to give it to the createstore as an argument
const reducer = combineReducers({
    // the slice you created here named todo it cannot contain a undefined or empty funtion- need to get someting 
    // that will come form the switch case in which your todo will be taken from
    todos: todosReducers,

    currentTab: tabReducer

})


// to initialize the thunk -pass it as an array
const middleware = [thunk];


// for initiazling the store as fuction - 2 thing in argument
// 1 - reducer these are action items , to what to do crud can be done by reducer - 1 could be passed by just reducer
// but for mutiple reducer use combineReducers in redux to combien mutipel reducers and pass as one
// the second arg will be a middle ware which will initialized by a funtion composeWithDevTools 
// we using the thunk middleware to work with there are others too but it is most famous - npm i redux-thunk to install

const store = createStore(
    reducer,
    // spreading middleware as whole to use in it
    composeWithDevTools(applyMiddleware(...middleware))
)


export default store;

// now go to index.js to wrap the whole application use use store to wrap your whoel app


