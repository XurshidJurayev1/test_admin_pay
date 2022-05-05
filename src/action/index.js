import api from '../Api';


export const registerAction = (user) => async (dispatch) => {
  const res = await api.post('/register', user);
  dispatch({
    type: 'REGISTER',
    payload: res.data,
  });
};

export const loginAction = (user) => async (dispatch) => {
  const res = await api.post('/login', user);
  dispatch({
    type: 'LOGIN',
    payload: res.data,
  });
};

export const logoutUser = () => (dispatch) => {
  dispatch({
    type: 'LOGOUT',
    payload: '',
  });
};

export const listUsers = () => async (dispatch) => {
  const res = await api.get('/users');
  dispatch({
    type: 'GET_USERS',
    payload: res.data,
  });
};

export const selectSingle = user => (dispatch) => {
  dispatch({
    type: 'SELECT_SINGLE',
    payload: user,
  });
};

export const updateUser = (user, id, token) => async (dispatch) => {
  const res = await api.put(`/user/update`, user, {
    headers: {
      Authorization: 'Bearer' + ' ' + token,
    },
  });
  dispatch({
    type: 'UPDATE_USER',
    payload: res.data,
  });
};

export const updateAdmin = (admin, token) => async (dispatch) => {
  const res = await api.put('/admin/update', admin, {
    headers: {
      Authorization: 'Bearer' + ' ' + token,
    },
  });
  dispatch({
    type: 'ADMIN_UPDATE',
    payload: res.data,
  });
};


export const deleteUser = (id, token) => async (dispatch) => {
  const res = await api.delete(`/user/${id}`, {
    headers: { Authorization: token },
  });
  dispatch({
    type: 'DELETE_USER',
    payload: res.data,
  });
};

// ----- card ----
export const listCard = () => async (dispatch) => {
  const res = await api.get('/card/list');
  dispatch({
    type: 'LIST_CARD',
    payload: res.data,
  });
};

export const addCard = (card, token) => async (dispatch) => {
  const res = await api.post('/card/create', card, {
    headers: { Authorization: token },
  });
  dispatch({
    type: 'ADD_CARD',
    payload: res.data,
  });
};

export const deleteCard = (id, token) => async (dispatch) => {
  const res = await api.get(`/card/delete/${id}`, {
    headers: { Authorization: token },
  });
  dispatch({
    type: 'DELETE_CARD',
    payload: res.data,
  });

};

export const selectCard = (card) => async (dispatch) => {
  dispatch({
    type: 'SELECT_CARD',
    payload: card,
  });

};

export const updateCard = (id, card, token) => async (dispatch) => {
  const res = await api.put(`/card/update/${id}`, card, {
    headers: { Authorization: token },
  });
  dispatch({
    type: 'UPDATE_CARD',
    payload: res.data,
  });

};


// ----- slider ----
export const listSlider = () => async (dispatch) => {
  const res = await api.get('/slider/list');
  dispatch({
    type: 'LIST_SLIDER',
    payload: res.data,
  });
};

export const addSlider = (card, token) => async (dispatch) => {
  const res = await api.post('/slider/create', card, {
    headers: { Authorization: token },
  });
  dispatch({
    type: 'ADD_SLIDER',
    payload: res.data,
  });
};

export const deleteSlider = (id, token) => async (dispatch) => {
  const res = await api.delete(`/slider/delete/${id}`, {
    headers: { Authorization: token },
  });
  dispatch({
    type: 'DELETE_SLIDER',
    payload: res.data,
  });

};

export const selectSlider = (card) => async (dispatch) => {
  dispatch({
    type: 'SELECT_SLIDER',
    payload: card,
  });

};

export const updateSlider = (id, card, token) => async (dispatch) => {
  const res = await api.put(`/slider/update/${id}`, card, {
    headers: { Authorization: token },
  });
  dispatch({
    type: 'UPDATE_SLIDER',
    payload: res.data,
  });

};








