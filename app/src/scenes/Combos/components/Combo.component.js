// @flow

import React from "react";
import { connect } from "react-redux";
import get from "lodash/fp/get";
import isEmpty from "lodash/fp/isEmpty";

import { getInteraction, getSubstance } from "../combos.reducer";

import { type Interaction } from "data/interactions.data";
import { type Substance } from "data/substances.data";

import InteractionIcon from "./InteractionIcon.component";

type Props = {
  firstId: string,
  secondId: string
} & StateProps;

const Combo = (props: Props) => {
  const { first, second, firstId, secondId, interaction, name } = props;

  const interactionText = interaction.interaction || "no data";

  return (
    <div>
      <h3>
        {first.name} + {second.name} ={" "}
        <InteractionIcon interaction={interaction.interaction} /> {interaction.status} {interaction.description} 
      </h3>
      {isEmpty(interaction.note) ? null : <p>{interaction.note}</p>}
    </div>
  );
};

type StateProps = {
  interaction: Interaction,
  first: Substance,
  second: Substance
};

const mapStateToProps = (state, props): StateProps => {
  const { firstId, secondId } = props;

  return {
    interaction: getInteraction([firstId, secondId]),
    first: getSubstance(firstId),
    second: getSubstance(secondId)
  };
};

export default connect(mapStateToProps)(Combo);
