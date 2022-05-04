import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { register, login, token, user, userList, singleUser, updateUserRed } from './UserReducers';
import { card, cardList, cardSelect, slider, sliderList, sliderSelect } from './adminReducers';


const rootReducer = combineReducers({
  register, login, token, user, userList, singleUser, updateUserRed, cardList,
  cardSelect,
  sliderList,
  sliderSelect,
  card,
  slider,
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));