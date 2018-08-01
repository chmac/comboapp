// @flow

import React from "react";
import map from "lodash/fp/map";
import "./Key.css";

import InteractionIcon from "./InteractionIcon.component";

import { interactionTypes } from "data/interactions.data";

const renderTypes = map(type => {
  const { id, name } = type;

  return (
    <div className={'FlexItem'} key={type.id} >
      <InteractionIcon interaction={type.id}  /> {name}
    </div>
  );
});

const Key = () => {
  return (
    <div className={'FlexBox'}>
      {renderTypes(interactionTypes)}
      <div style={{ clear: "both" }} />
    </div>
  );
};

export default Key;
