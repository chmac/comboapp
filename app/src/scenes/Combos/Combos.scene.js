// @flow

import React from "react";
import { connect } from "react-redux";
import map from "lodash/fp/map";

import Substance from "./components/Substance.component";
import SelectedCombos from "./components/SelectedCombos.component";
import Key from "./components/Key.component";
import Info from "./components/Info.component";
import InfoCategory from "./components/InfoCategory.component";

import { getSubstances, getAllSubstances, getSelected } from "./combos.reducer";

import { type Substance as SubstanceType } from "data/substances.data";

type Props = {
  substances: { [id: string]: SubstanceType },
  allSubstances: { [id: string]: SubstanceType },
  selected: string[],
};

const renderSubstances = map((s) => <Substance key={s.id} substance={s} />);

const Combos = (props: Props) => {
  const { substances, allSubstances } = props;

  return (
    <div>
      <Key />
      <InfoCategory />
      <SelectedCombos />
      <h2 style={{ marginTop: 40, marginBottom: 30 }}>Choose substances:</h2>
      {renderSubstances(substances)}
      <h2 style={{ marginTop: 40, marginBottom: 30 }}>All substances:</h2>
      {renderSubstances(allSubstances)}
      <Info />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    substances: getSubstances(state),
    allSubstances: getAllSubstances(state),
  };
};

export default connect(mapStateToProps)(Combos);
