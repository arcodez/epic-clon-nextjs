import React from "react";
import CardV1 from "../CardV1";

const ListOfCards = () => {
  return (
    <div className="list-of-cards-section">
      <div className="list-of-cards-title">
        <h2> Destacados de las ofertas de primavera {">"}</h2>
      </div>

      <div className="list-of-cards">
        {" "}
        {[1, 2, 3, 4, 5].map((card, index) => (
          <CardV1 key={index} />
        ))}
      </div>
    </div>
  );
};

export default ListOfCards;
