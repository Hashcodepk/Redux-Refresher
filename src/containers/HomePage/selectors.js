import homePageReducer from "./reducers";

import { createSelector } from "reselect";

const homePageState = (state) => state.homePageReducer;

export const makeSelectUsers = createSelector(homePageState, (homePageReducer) => homePageReducer.users );