// @flow

import keyBy from "lodash/fp/keyBy";

export type Substance = {
  id: string,
  name: string
};

const substances = [{ id: "lsd", name: "LSD" }];

export default keyBy("id", substances);
