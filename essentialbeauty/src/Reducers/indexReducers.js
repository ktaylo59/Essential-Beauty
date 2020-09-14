import {combineReducers} from 'redux';
import  makeupReducer  from './makeupReducers';

const rootReducer = combineReducers({
    makeup: makeupReducer,
})
export default rootReducer;