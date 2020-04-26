// @flow

import keyBy from "lodash/fp/keyBy";
import flatten from "lodash/fp/flatten";
import map from "lodash/fp/map";

import config from "./config.json";

export type Substance = {
  id: string,
  name: string,
};

// Build a list of "proper" names from `config.tableOrder`
const names = flatten(config.tableOrder);

/*
const groups = [
  ['psychedelic', [
      "LSD",
      "Mushrooms",
      "DMT",
      "Mescaline",
      "DOx",
      "NBOMes",
      "2C-x",
      "2C-T-x",
      "5-MeO-xxT",
      "Cannabis"
    ]
  ],
  ...
]
*/

const nameToType = {};

const substances = map((name) => {
  return {
    id: name.toLowerCase(),
    name,
    type: nameToType[name],
  };
})(names);

export default keyBy("id", substances);
