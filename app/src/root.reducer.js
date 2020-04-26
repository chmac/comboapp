// @flow

import { combineReducers } from "redux";

import combos from "./scenes/Combos/combos.reducer";

const reducer = combineReducers({
  combos,
});

export default reducer;
