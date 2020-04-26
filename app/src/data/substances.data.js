// @flow

import keyBy from "lodash/fp/keyBy";
import flatten from "lodash/fp/flatten";
import map from "lodash/fp/map";
import upperFirst from "lodash/fp/upperFirst";

import config from "./config.json";
import allDrugsData from "./allDrugs.json";

const allDrugs = allDrugsData.data[0];

export type Substance = {
  id: string,
  name: string,
  type: string,
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

const substances = map(
  (drug: { name: string, pretty_name?: string, categories: string[] }) => {
    const { name, categories } = drug;

    const pretty_name =
      typeof drug.pretty_name === "string"
        ? drug.pretty_name
        : upperFirst(name);

    const type =
      (categories && categories.length && categories[0]) ||
      nameToType[name] ||
      "unknown";

    return {
      id: name,
      name: pretty_name,
      type,
    };
    // debugger;
  }
)(allDrugs);

// const substances = map((name) => {
//   return {
//     id: name.toLowerCase(),
//     name,
//     type: nameToType[name],
//   };
// })(names);

debugger;

export default keyBy("id", substances);
