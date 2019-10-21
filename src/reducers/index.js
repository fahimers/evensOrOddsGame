import { combineReducers } from 'redux';
import settingsReducer from './setttings';
import deckReducer from './deck';

export default combineReducers({
  settings: settingsReducer,
  deck: deckReducer
});