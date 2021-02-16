import { createStore, combineReducers } from "redux";
import homePageReducer from "./containers/HomePage/reducers";
import userPage from "./containers/UserPage/reducer";

const reducers = combineReducers({
  homePageReducer,
  userPage,
});

export default createStore(reducers);
