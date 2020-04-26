// @flow

import React from "react";
import ArrowUp from "react-icons/lib/fa/arrow-up";
import DotCircle from "react-icons/lib/fa/dot-circle-o";
import ArrowDown from "react-icons/lib/fa/arrow-down";
import Warning from "react-icons/lib/fa/exclamation-triangle";
import Heartbeat from "react-icons/lib/fa/heartbeat";
import Times from "react-icons/lib/fa/times-circle";
import Question from "react-icons/lib/fa/question";

import { type InteractionTypes } from "data/interactions.data";

type Props = {
  interaction: InteractionTypes,
};

const style = (color: string) => {
  return {
    backgroundColor: color,
    padding: 3,
    width: 25,
    height: 25,
  };
};

const interactionToIconMap = {
  synergy: <ArrowUp color="white" style={style("#0a89dd")} />,
  low: <DotCircle color="white" style={style("#35afff")} />,
  decrease: <ArrowDown color="white" style={style("#006cb3")} />,
  caution: <Warning color="white" style={style("#d5c625")} />,
  unsafe: <Heartbeat color="white" style={style("#d98427")} />,
  danger: <Times color="white" style={style("#d12128")} />,
  unknown: <Question color="white" style={style("#6f6f6f")} />,
};

const InteractionIcon = (props: Props) => {
  const { interaction } = props;

  return interactionToIconMap[interaction];
};

export default InteractionIcon;
