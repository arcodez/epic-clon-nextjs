import React from "react";
import CardVColumn from "../CardVColumn";

const ListOfCardsColumns = ({ cards = [1, 2, 3, 4, 5] }) => {
  return (
    <div className="list-of-cards-column">
      <div className="list-column-info">
        <div className="list-of-cards-column-title">
          <h2>Mas vendidos</h2>
        </div>
        <div className="list-of-cards-column-button">Ver mas</div>
      </div>

      <div className="cards-column">
        {cards.map((card, index) => (
          <CardVColumn {...card} key={index} />
        ))}
      </div>
    </div>
  );
};

export default ListOfCardsColumns;
