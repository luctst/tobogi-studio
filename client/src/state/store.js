import {createStore, combineReducers} from 'redux';
import sidebarReducer from "./reducers/sidebarReducer";
import windowWidthReducer from "./reducers/windowWidthReducer";

const reducersRoot = combineReducers({
    sidebarReducer,
    windowWidthReducer
});

const store = createStore(reducersRoot);
export default store;