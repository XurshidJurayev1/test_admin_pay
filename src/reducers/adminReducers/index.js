export const cardList = (state = [], action) => {
  switch (action.type) {
    case 'LIST_CARD' :
      return action.payload;
    default:
      return state;
  }
};

export const cardSelect = (state = {}, action) => {
  switch (action.type) {
    case 'SELECT_CARD' :
      return action.payload;
    default:
      return state;
  }
};

export const card = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_CARD':
      return action.payload;
    case 'DELETE_CARD':
      return action.payload;
    case 'UPDATE_CARD':
      return action.payload;
    default:
      return state;
  }
};

export const sliderList = (state = [], action) => {
  switch (action.type) {
    case 'LIST_SLIDER' :
      return action.payload;
    default:
      return state;
  }
};

export const sliderSelect = (state = {}, action) => {
  switch (action.type) {
    case 'SELECT_SLIDER' :
      return action.payload;
    default:
      return state;
  }
};

export const slider = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_SLIDER':
      return action.payload;
    case 'DELETE_SLIDER':
      return action.payload;
    case 'UPDATE_SLIDER':
      return action.payload;
    default:
      return state;
  }
};