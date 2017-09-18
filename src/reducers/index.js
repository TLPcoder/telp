import { combineReducers } from 'redux'
import places from './place-reducer';
import page from './page-reducer';

const rootReducer = combineReducers({
  places, page
})

export default rootReducer