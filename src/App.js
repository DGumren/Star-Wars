import React, { useEffect, useState } from "react";
import StarWars from "./component/StarWars";
import "../src/App.css";
import PeopleCard from "./component/PeopleCard";
import PlanetCard from "./component/PlanetCard";
const App = () => {
  const [details, setDetails] = useState(null);
  const [charcters, setCharacters] = useState([]);
  useEffect(() => {
    fetch("https://swapi.co/api/people")
      .then(res => res.json())
      .then(res =>
        setCharacters(
          res.results.map((character, id) => ({
            name: character.name,
            gender: character.gender,
            hairColor: character.hair_color,
            eyeColor: character.eye_color
          }))
        )
      );
  }, []);
  return (
    <React.Fragment>
      <StarWars />
      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control"
          placeholder="Search"
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
        />
        <div class="input-group-append">
          <button class="btn btn-info" type="button" id="button-addon2">
            Search
          </button>
        </div>
      </div>
      <div>
        <h1 className="subtitle">Characters</h1>
      </div>
      <div className="box2 container">
        <div className="row">
          <div className="box1 d-flex flex-col flex-nowrap">
            {charcters.map((character, index) => {
              return (
                <PeopleCard
                  key={index}
                  name={character.name}
                  eyeColor={character.eyeColor}
                  hairColor={character.hairColor}
                  gender={character.gender}
                />
              );
            })}
            {/* <PeopleCard />
            <PeopleCard />
            <PeopleCard />
            <PeopleCard />
            <PeopleCard />
            <PeopleCard />
            <PeopleCard />
            <PeopleCard />
            <PeopleCard />
            <PeopleCard /> */}
          </div>
        </div>
      </div>
      <div>
        <h1 className="subtitle">Planets</h1>
      </div>
      <div className="box2 container">
        <div className="row">
          <div className="box1 d-flex flex-col flex-nowrap">
            <PlanetCard />
            <PlanetCard />
            <PlanetCard />
            <PlanetCard />
            <PlanetCard />
            <PlanetCard />
            <PlanetCard />
            <PlanetCard />
            <PlanetCard />
            <PlanetCard />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default App;
