//redux
import { combineReducers } from 'redux';
//carpetas
import productosReducer from './productosReducer';

export default combineReducers({
    productos:productosReducer
})