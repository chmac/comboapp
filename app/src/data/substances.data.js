// @flow

import keyBy from "lodash/fp/keyBy";
import flatten from "lodash/fp/flatten";
import zip from "lodash/fp/zip";
import map from "lodash/fp/map";
import each from "lodash/fp/each";
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
each(([type, names]) => {
  each((name) => {
    nameToType[name] = type;
  })(names);
})(groups);

const keyById = keyBy("id");

export const substances = keyById(
  map((name) => {
    return {
      id: name.toLowerCase(),
      name,
      type: nameToType[name],
    };
  })(names)
);

export const allSubstances = keyById(
  map((drug: { name: string, pretty_name?: string, categories: string[] }) => {
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
  })(allDrugs)
);
