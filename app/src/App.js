import React, { Component } from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";

import reducer from "./root.reducer";

import Combos from "./scenes/Combos";

import logo from "./logo.svg";
import "./App.css";

// Instantiate the redux store
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <Combos />
        </div>
      </Provider>
    );
  }
}

export default App;
