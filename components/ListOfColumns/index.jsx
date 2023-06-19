import React from "react";
import ListOfCardsColumns from "../ListOfCardsColumns";

const ListOfColumns = () => {
  return (
    <div className="list-of-columns-section">
      {[1, 2, 3].map((index) => (
        <ListOfCardsColumns key={index} />
      ))}
    </div>
  );
};

export default ListOfColumns;
