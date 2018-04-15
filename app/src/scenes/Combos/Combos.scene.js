// @flow

import React from "react";
import { connect } from "react-redux";
import map from "lodash/fp/map";

import { getSubstances, getSelected } from "./combos.reducer";

import { type Substance } from "../../data/substances.data";

type Props = {
  substances: { [id: string]: Substance },
  selected: string[]
};

const renderSubstances = map(({ id, name }) => {
  return <div key={id}>{name}</div>;
});

const Combos = (props: Props) => {
  const { substances, selected } = props;

  return <div>{renderSubstances(substances)}</div>;
};

const mapStateToProps = state => {
  return {
    substances: getSubstances(state),
    selected: getSelected(state)
  };
};

export default connect(mapStateToProps)(Combos);
