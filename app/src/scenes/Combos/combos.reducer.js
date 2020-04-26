// @flow

import includes from "lodash/fp/includes";
import reject from "lodash/fp/reject";
import get from "lodash/fp/get";
import set from "lodash/fp/set";
import flow from "lodash/fp/flow";
import find from "lodash/fp/find";
import isEmpty from "lodash/fp/isEmpty";
import difference from "lodash/fp/difference";
import each from "lodash/fp/each";
import eq from "lodash/fp/eq";
import sortBy from "lodash/fp/sortBy";

import {
  substances,
  allSubstances,
  type Substance,
} from "data/substances.data";
import interactions, { type Interaction } from "data/interactions.data";

import path from "./selector.path";

const getState = get(path);

const empty = {
  selected: [],
  // Convert the array of substances to `{[id]: object}`
  substances,
  allSubstances,
};

type State = {
  selected: string[],
  substances: {
    [string]: Substance,
  },
  allSubstances: {
    [string]: Substance,
  },
};

type Action = {
  type: "toggleSelected" | "resetSelection",
  payload: Object,
};

const toggleSelectedInSelected = (selected: string[], id: string) => {
  if (includes(id)(selected)) {
    return reject(eq(id))(selected);
  } else {
    return selected.concat(id);
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
    const allSubstances = touchSubstance(state.allSubstances, id, now);
    return { ...state, selected, allSubstances };
  } else if (type === "resetSelection") {
    return set("selected", [])(state);
  }

  return state;
};

export default reducer;

export const toggleSelected = (id: string) => {
  return {
    type: "toggleSelected",
    payload: { id, now: Date.now() },
  };
};

export const resetSelection = () => {
  return {
    type: "resetSelection",
    payload: {},
  };
};

export const getSelected = flow([getState, get("selected")]);

export const getSubstances = flow([
  getState,
  get("substances"),
  sortBy("name"),
]);

export const getAllSubstances = flow([
  getState,
  get("allSubstances"),
  sortBy("name"),
]);

export const getSubstance = (id: string) => get(id)(allSubstances);

export const getIsSelected = (state: State, id: string) => {
  return includes(id)(getSelected(state));
};

export const getSelectedCount = flow([getSelected, get("length")]);

export const getComboCount = (state: State) => {
  const count = getSelectedCount(state);

  return (count * (count - 1)) / 2;
};

export const getInteraction = (ids: string[]): Interaction => {
  return (
    find((interaction: Interaction) => {
      // If the difference between this substance's IDs array and our target IDs
      // array is empty, then this interaction is a match.
      return isEmpty(difference(interaction.ids, ids));
    })(interactions) || {}
  );
};

type Combo = [string, string];
export const getCombos = (state: any): Combo[] => {
  // We need to clone `selected` so as not to mutate redux state
  const selected = [...getSelected(state)];

  // We take IDs from `selected` and push them into `memo`
  const memo = [];
  // We build the result iteratively into `combos`
  const combos = [];

  each(() => {
    const id = selected.pop();
    each((memoId: string) => combos.push([id, memoId]))(memo);
    memo.push(id);
  })(selected.reverse());

  return combos;
};

// export const getSelectedCombos
