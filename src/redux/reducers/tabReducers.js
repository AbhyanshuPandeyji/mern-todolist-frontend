// this is to toggle between the tabs of the todos list all - active -and done todos
import * as actionTypes from '../actions/type';


export const tabReducer = (state = actionTypes.ALL_TODOS, action) => {
    switch (action.type) {
        case actionTypes.TOGGLE_TAB:
            return action.selected
        default: 
            return state;
    }
}