import api from '../Api'


export const registerAction = (user) => async (dispatch)  => {
    const res = await api.post('register', user)
    dispatch({
        type : 'REGISTER',
        payload: res.data,
    })
}

export const loginAction = (user) => async (dispatch)  => {
    const res = await api.post('login', user)
    dispatch({
        type : 'LOGIN',
        payload: res.data,
    })
}

export const logoutUser = () => (dispatch) => {
    dispatch({
        type: "LOGOUT",
        payload: ''
    })
}

export const listUsers = () => async (dispatch) => {
    const res = await api.get('/users')
    dispatch({
        type: 'GET_USERS',
        payload: res.data
    })
}

export const selectSingle = user => (dispatch) => {
    dispatch({
        type: "SELECT_SINGLE",
        payload: user
    })
}

export const updateUser = (user, id, token) => async (dispatch) => {
    const res = await api.put(`/admin/update`, user, {
        headers: { Authorization: token },
      })
    dispatch({
        type: "UPDATE_USER",
        payload: res.data
    })
}

// ----- card ----


export const listCard = () => async (dispatch) => {
    const res = await api.get('/card/list')
    dispatch({
        type: 'LIST_CARD',
        payload: res.data
    })
}