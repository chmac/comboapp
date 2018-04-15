// @flow

import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { type Substance as SubstanceType } from "data/substances.data";

import { toggleSelected } from "../combos.reducer";

type Props = {
  substance: SubstanceType
} & DispatchProps;

const Substance = (props: Props) => {
  const { substance, toggleSelected } = props;
  const { id, name } = substance;

  return <div onClick={toggleSelected.bind(null, id)}>{name}</div>;
};

const mapStateToProps = () => ({});

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
