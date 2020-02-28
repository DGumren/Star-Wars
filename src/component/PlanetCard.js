import React from "react";
import heartOutline from "../Assets/heart-outline.svg";

const PlanetCard = () => {
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col">
          <div className="card" style={{ width: "18rem" }}>
            <img
              className="card-img-top"
              src="https://lumiere-a.akamaihd.net/v1/images/Coruscant_03db43b4.jpeg?region=0%2C0%2C1536%2C864&width=960"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">PlanetCard</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
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
export default PlanetCard;
