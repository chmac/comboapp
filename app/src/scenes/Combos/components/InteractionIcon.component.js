// @flow

import React from "react";
import FontAwesome from "react-fontawesome";

type Props = {
  interaction: string
};

const InteractionIcon = (props: Props) => {
  const { interaction } = props;

  return <span>{interaction}</span>;
};

export default InteractionIcon;
