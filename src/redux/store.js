import {createStore, combineReducers} from 'redux';
import TasksReducer from './reducers/tasksReducer';

const reducer = combineReducers({
    TasksReducer
}); 

const store = createStore(reducer);

export default store;