// @flow

import React from "react";
import map from "lodash/fp/map";
import "./InfoCategory.css";

import InteractionIcon from "./InteractionIcon.component";

import { interactionTypes } from "data/interactions.data";

const renderTypes = map(type => {
  const { id, name, description } = type;

  return (
    <div className={'CategoriesItems'} key={type.id} >
      <p><InteractionIcon interaction={type.id}  /> {name}   </p>
      <p>{description}</p>
    </div>
  );
});

class InfoCategory extends React.Component  {
  constructor(props){
    super(props)
    this.state = {
      show: false
    }
   
  }
  toggle() {
    this.setState({
      shown: !this.state.shown
    });
  }
  render() {
    var hidden = {
			display: this.state.shown ? "flex" : "none"
    }
    let toggled = this.state.shown ? "Explanation Explanation-selected" : "Explanation";
    
    return (
      <div>
        <button onClick={this.toggle.bind(this)} className={toggled}>Toggle Explanation</button>
        <div style={hidden} className={'CategoriesFlex'}>
          {renderTypes(interactionTypes)}
          <div style={{ clear: "both" }} />
        </div>
      </div>
    );
  }
};

export default InfoCategory;
