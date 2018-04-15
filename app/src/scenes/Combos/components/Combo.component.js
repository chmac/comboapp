// @flow

import React from "react";
import { connect } from "react-redux";
import get from "lodash/fp/get";

import { getInteraction } from "../combos.reducer";

import { type Interaction } from "data/interactions.data";

type Props = {
  first: string,
  second: string
} & StateProps;

const Combo = (props: Props) => {
  const { first, second, interaction } = props;

  return (
    <div>
      {first} + {second} = {interaction.interaction}
    </div>
  );
};

type StateProps = {
  interaction: Interaction
};

const mapStateToProps = (state, props) => {
  const { first, second } = props;

  return {
    interaction: getInteraction([first, second])
  };
};

export default connect(mapStateToProps)(Combo);
