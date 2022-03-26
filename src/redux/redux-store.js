import { applyMiddleware, combineReducers, createStore } from 'redux';
import authReducer from "./auth-reducer";
import thunkMiddleware from 'redux-thunk'; 

let reducers = combineReducers({
    auth: authReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;