import React from "react";

const Card = () => {
  return (
    <div>
      <div class="card mb-3 mt-3">
        <img
          src="https://cdn.mos.cms.futurecdn.net/fWdeQQoFWwwgxqHSJ3HkpV-1200-80.jpg"
          class="card-img-top"
          alt="This is an img"
        />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a class="btn btn-primary" href="...">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
