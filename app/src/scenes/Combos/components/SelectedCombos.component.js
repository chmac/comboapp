// @flow

import React from "react";
import { connect } from "react-redux";
import map from "lodash/fp/map";

import { getCombos } from "../combos.reducer";

import Combo from "./Combo.component";

const renderCombos = map((combo) => (
  <Combo key={combo.join(",")} firstId={combo[0]} secondId={combo[1]} />
));

const SelectedCombos = (props) => {
  const { combos } = props;

  return <div>{renderCombos(combos)}</div>;
};

const mapStateToProps = (state) => {
  return {
    combos: getCombos(state),
  };
};

export default connect(mapStateToProps)(SelectedCombos);
