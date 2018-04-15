// @flow

import keyBy from "lodash/fp/keyBy";

export type Substance = {
  id: string,
  name: string
};

const substances = [
  { id: "lsd", name: "LSD" },
  {
    id: "cannabis",
    name: "Cannabis"
  },
  { id: "cocaine", name: "Cocaine" }
];

export default keyBy("id", substances);
