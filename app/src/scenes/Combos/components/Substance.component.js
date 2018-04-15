// @flow

import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { type Substance as SubstanceType } from "data/substances.data";

import { getIsSelected, toggleSelected } from "../combos.reducer";

type Props = {
  substance: SubstanceType
} & DispatchProps;

const Substance = (props: Props) => {
  const { substance, isSelected, toggleSelected } = props;
  const { id, name } = substance;

  return (
    <div onClick={toggleSelected.bind(null, id)}>
      {name}
      {isSelected ? "*" : ""}
    </div>
  );
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
