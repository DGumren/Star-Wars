import React from "react";
import StarWars from "./component/StarWars";
import "../src/App.css";
import Card from "./component/Card";

const App = () => {
  return (
    <React.Fragment>
      <StarWars />
      <div>
        <h1 className="subtitle">Characters</h1>
      </div>
      <div className="box2 container">
        <div className="row">
          <div className="box1 d-flex flex-col flex-nowrap">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
      <div>
        <h1 className="subtitle">Planets</h1>
      </div>
      <div className="box2 container">
        <div className="row">
          <div className="box1 d-flex flex-col flex-nowrap">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default App;
