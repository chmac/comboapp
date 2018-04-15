// @flow

import React from "react";
import map from "lodash/fp/map";

import InteractionIcon from "./InteractionIcon.component";

import { interactionTypes } from "data/interactions.data";

const renderTypes = map(type => {
  const { id, name } = type;

  return (
    <div style={{ float: "left", marginLeft: 10, marginRight: 10 }}>
      <InteractionIcon interaction={type.id} /> {name}
    </div>
  );
});

const Key = () => {
  return (
    <div
      style={{
        backgroundColor: "lightgrey",
        paddingTop: 10,
        paddingBottom: 10
      }}
    >
      {renderTypes(interactionTypes)}
      <div style={{ clear: "both" }} />
    </div>
  );
};

export default Key;
