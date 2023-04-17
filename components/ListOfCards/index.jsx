import React from "react";
import CardV1 from "../CardV1";

const ListOfCards = () => {
  return (
    <div className="list-of-cards-section">
      {[1, 2, 3, 4].map((card) => (
        <CardV1 />
      ))}
    </div>
  );
};

export default ListOfCards;
