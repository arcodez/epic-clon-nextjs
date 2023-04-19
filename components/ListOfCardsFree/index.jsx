import React from "react";
import CardFreeGame from "../CardFreeGame";

const ListOfCardsFree = () => {
  return (
    <div className="games-free-cards">
      {[1, 2, 3, 4].map((card, index) => (
        <CardFreeGame key={index} />
      ))}
    </div>
  );
};

export default ListOfCardsFree;
