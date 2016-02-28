import { combineReducers } from 'redux';
import { routeReducer } from 'redux-simple-router';
import { reducer as formReducer } from 'redux-form';
import { items } from './items';
import { infoGame } from './infoGame';

const rootReducer = combineReducers({
  form: formReducer,
  routing: routeReducer,
  /* your reducers */
  items,
  infoGame
});

export default rootReducer;
