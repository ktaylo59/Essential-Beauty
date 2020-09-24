import {combineReducers} from 'redux';

import {cartReducer} from './cartReducers';
import  makeupReducer  from './makeupReducers';



const rootReducer = combineReducers({
    makeup: makeupReducer,
    cart: cartReducer
})
export default rootReducer;