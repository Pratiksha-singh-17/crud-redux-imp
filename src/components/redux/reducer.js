import { combineReducers } from 'redux'

const postsReducer = (state = [], action) => {

    switch (action.type) {
        case "ADD_POST":
            return [...state, action.payload]
        default: return state
    }
}

const getReducer = (state = [], action) => {
    switch (action.type) {
        case "GET_USER":
            return action.payload
        default: return state
    }
}

const rootReducer = combineReducers({
    post: postsReducer,
    data : getReducer

});

export default rootReducer;