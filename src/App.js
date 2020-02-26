import React from "react";
import StarWars from "./component/StarWars";
import "../src/App.css";
import Card from "./component/Card";

const App = () => {
  return (
    <React.Fragment>
      <StarWars />
      <div className="row">
        <h3>
          <font color="white">Characters</font>
        </h3>
      </div>
      <div className="d-flex flex-row">
        <Card />
      </div>
      <div className="row">
        <h3>
          <font color="white">Planets</font>
        </h3>
      </div>
      <div className="d-flex flex-row">
        <Card />
      </div>
    </React.Fragment>
  );
};

export default App;
