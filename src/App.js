import React, { Component } from "react";
// import "./App.css";

import "bulma/css/bulma.min.css";
import "font-awesome/css/font-awesome.min.css";
import "./main.css";

import Header from "./Header";
import ManuscriptForm from "./ManuscriptForm";
// import ScriptChart from "./ScriptChart";
import Footer from "./Footer";
// import MiradorContainer from "./MiradorContainer";
import MiradorTabbed from "./MiradorTabbed";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header />
        </header>
        <div className={"columns main-content"}>
          <div className={"column is-one-quarter"}>
            <div className={"box"}>
              <h4 className={"title is-4"}>Scriptchart options</h4>
              <ManuscriptForm />
            </div>
          </div>
          {/* <div className={"column"}>
            <div className={"top-panel"}>
              <ScriptChart />
            </div>
            <div className={"bottom-pannel"}>
              <MiradorContainer />
            </div>
          </div> */}
          <div className={"column"}>
            <MiradorTabbed />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
