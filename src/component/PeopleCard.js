import React from "react";
import heartOutline from "../Assets/heart-outline.svg";
import PropTypes from "Prop-Types";

const PeopleCard = () => {
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
              <h5 className="card-title">People</h5>
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

character.propTypes = {
  character: PropTypes.object.isRequired
};

export default PeopleCard;
