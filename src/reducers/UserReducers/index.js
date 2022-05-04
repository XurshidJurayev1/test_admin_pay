import { act } from "react-dom/test-utils"


export const register = (state={}, action) => {
    switch(action.type){
        case "REGISTER": 
            return action.payload
        default : 
            return state
    }
}

export const login = (state={}, action) => {
    switch(action.type){
        case "LOGIN": 
            return action.payload
        case "LOGOUT": 
            return action.payload
        default : 
            return state
    }
}

export const token = (state= {}, action) => {
    switch (action.type) {
        case "LOGIN":
                return action.payload.token   
        case "LOGOUT": 
            return action.payload 
        default:
            return state
    }
}

export const user = (state= {}, action) => {
    switch (action.type) {
        case "LOGIN":
                return action. payload.user
        case "LOGOUT": 
                return action.payload    
        default:
            return state
    }
}


// ----- users -----

export const userList = (state=[], action) => {
    switch(action.type) {
        case 'GET_USERS' :
            return action.payload
        default:
            return state
    }
}

export const singleUser = (state={}, action) => {
    switch (action.type){
        case "SELECT_SINGLE" : 
        return action.payload
    default :
        return state
    }
}


export const updateUserRed = (state={}, action) => {
    switch(action.type) {
        case "UPDATE_USER" :
            return action.payload
        default: return state
    }
}