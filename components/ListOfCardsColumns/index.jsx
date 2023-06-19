import React from "react";
import CardVColumn from "../CardVColumn";

const ListOfCardsColumns = () => {
  return (
    <div className="list-of-cards-column">
      <div className="list-of-cards-column-title">Mas vendidos</div>

      <div className="cards-column">
        {[1, 2, 3, 4, 5].map((card, index) => (
          <CardVColumn {...card} key={index} />
        ))}
      </div>
    </div>
  );
};

export default ListOfCardsColumns;
