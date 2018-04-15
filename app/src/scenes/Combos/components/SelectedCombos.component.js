// @flow

import React from "react";
import { connect } from "react-redux";

import { getSelected, getCombos } from "../combos.reducer";

const SelectedCombos = props => {
  const { selected, combos } = props;

  return (
    <div>
      <h2>SelectedCombos</h2>
      <div>{combos.join(", ")}</div>
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
