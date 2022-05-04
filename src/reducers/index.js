import {applyMiddleware, combineReducers, createStore} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import {register, login, token, user, userList, singleUser, updateUserRed,} from './UserReducers'



const rootReducer = combineReducers({
    register, login, token, user, userList, singleUser, updateUserRed,
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))