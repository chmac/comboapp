// @flow

import keyBy from "lodash/fp/keyBy";
import flatten from "lodash/fp/flatten";
import zip from "lodash/fp/zip";
import map from "lodash/fp/map";
import each from "lodash/fp/each";

import config from "./config.json";

export type Substance = {
  id: string,
  name: string
};

// Build a list of "proper" names from `config.tableOrder`
const names = flatten(config.tableOrder);

// Build a list of groups along with their substances
const groups = zip(config.groupNames, names);
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
const groupPairs = map(([type, names]) => {
  each(name => {
    nameToType[name] = type;
  })(names);
})(groups);

const substances = map(name => {
  return {
    id: name.toLowerCase(),
    name,
    type: nameToType[name]
  };
})(names);

const substancesTemp = [
  { id: "lsd", name: "LSD" },
  {
    id: "cannabis",
    name: "Cannabis"
  },
  { id: "cocaine", name: "Cocaine" }
];

export default keyBy("id", substances);
