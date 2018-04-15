// @flow

import { combineReducers } from "redux";

import combos from "./services/combos/combos.reducer";

const reducer = combineReducers({
  combos
});

export default reducer;
