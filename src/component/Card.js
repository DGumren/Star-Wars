import React from "react";
import heartOutline from "../Assets/heart-outline.svg";

const Card = () => {
  return (
    <div>
      <div class="card mr-3 ml-1">
        <img
          src="https://cdn.mos.cms.futurecdn.net/fWdeQQoFWwwgxqHSJ3HkpV-1200-80.jpg"
          class="card-img-top"
          alt="This is an img"
        />
        <div class="card-body">
          <h5 class="card-title">Character:</h5>
          <p class="card-text">Star Wars</p>
          <div class="d-flex justify-content-around">
            <a class="btn btn-primary" href="...">
              Learn More
            </a>

            <button type="button" class="btn btn-outline-warning">
              <img src={heartOutline} alt="favorites"></img>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
