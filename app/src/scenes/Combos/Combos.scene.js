// @flow

import React from "react";
import { connect } from "react-redux";
import map from "lodash/fp/map";

import Substance from "./components/Substance.component";
import SelectedCombos from "./components/SelectedCombos.component";

import { getSubstances, getSelected } from "./combos.reducer";

import { type Substance as SubstanceType } from "data/substances.data";

type Props = {
  substances: { [id: string]: SubstanceType },
  selected: string[]
};

const renderSubstances = map(s => <Substance key={s.id} substance={s} />);

const Combos = (props: Props) => {
  const { substances, selected } = props;

  return (
    <div>
      <SelectedCombos />
      <p>Choose substances:</p>
      {renderSubstances(substances)}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    substances: getSubstances(state),
    selected: getSelected(state)
  };
};

export default connect(mapStateToProps)(Combos);
