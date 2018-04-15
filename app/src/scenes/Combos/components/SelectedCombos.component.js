// @flow

import React from "react";
import { connect } from "react-redux";
import map from "lodash/fp/map";

import { getSelected, getCombos } from "../combos.reducer";

import Combo from "./Combo.component";

const renderCombos = map(combo => (
  <Combo key={combo.join(",")} first={combo[0]} second={combo[1]} />
));

const SelectedCombos = props => {
  const { selected, combos } = props;

  return (
    <div>
      <h2>SelectedCombos</h2>
      <div>{renderCombos(combos)}</div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    selected: getSelected(state),
    combos: getCombos(state)
  };
};

export default connect(mapStateToProps)(SelectedCombos);
