import { ActionTypes } from "./constants";

const defaultState = {
  users: [],
};

const homePageReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ActionTypes.SET_USERS:
      return { ...state, users: action.payload };
    default:
      return state;
  }
};

export default homePageReducer;
