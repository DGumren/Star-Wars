import React from "react";
import heartOutline from "../Assets/heart-outline.svg";

const PeopleCard = props => {
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col">
          <div className="card" style={{ width: "18rem" }}>
            <img
              className="card-img-top"
              src="https://cdn.mos.cms.futurecdn.net/fWdeQQoFWwwgxqHSJ3HkpV-1200-80.jpg"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title"> {props.name} </h5>
              <div className="card-text">
                <p>Hair color: {props.hairColor}</p>
                <p>Eye color: {props.eyeColor}</p>
                <p>Gender: {props.gender}</p>
              </div>
              <a href="#" className="btn btn-primary">
                Learn More
              </a>

              <button type="button" class="btn btn-outline-warning">
                <img src={heartOutline} alt="favorites"></img>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PeopleCard;
