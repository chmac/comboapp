import React, { Component } from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import Nav from "./scenes/Nav/Nav.component";
import Banner from "./scenes/Nav/Banner.component";
import reducer from "./root.reducer";

import Combos from "./scenes/Combos";

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
          <header>
            <Banner />
            <Nav />
          </header>
          <div style={{ marginTop: "2%" }} className="container-fluid">
            <div className="jumbotron">
              <h1 className="App-title">Drug Combinations</h1>
              <p>
                This is an app version of our combo chart you can find{" "}
                <a
                  href="https://wiki.tripsit.me/wiki/Drug_combinations"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  here
                </a>{" "}
              </p>
              <Combos />
            </div>
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
