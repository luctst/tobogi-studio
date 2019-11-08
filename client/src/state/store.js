import {createStore, combineReducers} from 'redux';
import sidebarReducer from "./reducers/sidebarReducer";

const reducersRoot = combineReducers({
    sidebarReducer,
});

const store = createStore(reducersRoot);
export default store;