import {combineReducers} from "redux";
import {reducer as appReducer} from './app/redux';
import {reducer as todoReducer} from './todos/redux';

const reducers = combineReducers({
    app: appReducer,
    todos: todoReducer,
});


export default reducers;