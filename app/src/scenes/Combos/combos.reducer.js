// @flow

import includes from "lodash/fp/includes";
import reject from "lodash/fp/reject";
import get from "lodash/fp/get";
import set from "lodash/fp/set";
import flow from "lodash/fp/flow";
import find from "lodash/fp/find";
import isEmpty from "lodash/fp/isEmpty";
import difference from "lodash/fp/difference";
import values from "lodash/fp/values";

import substances, { type Substance } from "../../data/substances.data";
import interactions, { type Interaction } from "../../data/interactions.data";

import path from "./selector.path";

const getState = get(path);

const empty = {
  selected: [],
  // Convert the array of substances to `{[id]: object}`
  substances
};

type State = {
  selected: string[],
  substances: {
    [string]: Substance
  }
};

type Action = {
  type: "toggleSelected" | "resetSelection",
  payload: Object
};

const toggleSelectedInSelected = (selected: string[], id: string) => {
  if (includes(id)(selected)) {
    return selected.concat(id);
  } else {
    return reject(id)(selected);
  }
};

const touchSubstance = (
  substances: { [string]: Substance },
  id: string,
  now: Date
) => {
  return set(`${id}.lastTouched`, now)(substances);
};

const reducer = (state: State = empty, action: Action) => {
  const { type, payload } = action;

  if (type === "toggleSelected") {
    const { id, now } = payload;
    const selected = toggleSelectedInSelected(state.selected, id);
    const substances = touchSubstance(state.substances, id, now);
    return { ...state, selected, substances };
  } else if (type === "resetSelection") {
    return set("selected", [])(state);
  }

  return state;
};

export default reducer;

export const toggleSelected = (id: string) => {
  return {
    type: "toggleSelected",
    payload: { id, now: Date.now() }
  };
};

export const resetSelection = () => {
  return {
    type: "resetSelection",
    payload: {}
  };
};

export const getSelected = flow([getState, get("selected")]);

export const getSubstances = flow([getState, get("substances")]);

export const getIsSelected = (state: State, id: string) => {
  return includes(id)(getSelected(state));
};

export const getSelectedCount = flow([getSelected, get("length")]);

export const getComboCount = (state: State) => {
  const count = getSelectedCount(state);

  return count * (count - 1) / 2;
};

export const getInteraction = (ids: string[]) => {
  find((interaction: Interaction) => {
    // If the difference between this substance's IDs array and our target IDs
    // array is empty, then this interaction is a match.
    return isEmpty(difference(interaction.ids, ids));
  })(interactions);
};

type Combo = [string, string];
export const getCombos = (): Combo[] => {
  return [];
};

// export const getSelectedCombos
