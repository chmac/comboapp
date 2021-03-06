// @flow

import React from "react";
import { connect } from "react-redux";
import isEmpty from "lodash/fp/isEmpty";

import { getInteraction, getSubstance } from "../combos.reducer";

import { type Interaction } from "data/interactions.data";
import { type Substance } from "data/substances.data";

import InteractionIcon from "./InteractionIcon.component";

type StateProps = {
  interaction: Interaction,
  first: Substance,
  second: Substance,
};

type Props = {
  firstId: string,
  secondId: string,
} & StateProps;

const Combo = (props: Props) => {
  const { first, second, interaction } = props;

  return (
    <div>
      <h3>
        {first.name} + {second.name} ={" "}
        <InteractionIcon interaction={interaction.interaction} />{" "}
        {interaction.status} {interaction.description}
      </h3>
      {isEmpty(interaction.note) ? null : <p>{interaction.note}</p>}
    </div>
  );
};

const mapStateToProps = (state, props): StateProps => {
  const { firstId, secondId } = props;

  return {
    interaction: getInteraction([firstId, secondId]),
    first: getSubstance(firstId),
    second: getSubstance(secondId),
  };
};

export default connect(mapStateToProps)(Combo);
