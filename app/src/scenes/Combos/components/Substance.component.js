// @flow

import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { type Substance as SubstanceType } from "data/substances.data";

import { getIsSelected, toggleSelected } from "../combos.reducer";

import "./Substance.css";

type Props = {
  substance: SubstanceType
} & StateProps &
  DispatchProps;

const Substance = (props: Props) => {
  const { substance, isSelected, toggleSelected } = props;
  const { id, name } = substance;

  return (
    <button
      className={`Substance ${isSelected ? "Substance-selected" : ""}`}
      onClick={toggleSelected.bind(null, id)}
    >
      {name}
    </button>
  );
};

type StateProps = {
  isSelected: boolean
};

const mapStateToProps = (state, props) => ({
  isSelected: getIsSelected(state, props.substance.id)
});

type DispatchProps = {
  toggleSelected: string => {}
};

const mapDispatchToProps = (dispatch): DispatchProps =>
  bindActionCreators(
    {
      toggleSelected
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Substance);
