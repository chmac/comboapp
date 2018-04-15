// @flow

import React from "react";

import { type InteractionTypes } from "data/interactions.data";

type Props = {
  interaction: InteractionTypes
};

const interactionToIconMap = {};

const InteractionIcon = (props: Props) => {
  const { interaction } = props;

  return <span>!!</span>;
};

export default InteractionIcon;
