import React from "react";

const ListOfCardsV3 = () => {
  return (
    <div className="list-of-cards-v3-section">
      <div className="list-of-cards-v3">
        {[1, 2, 3].map(() => (
          <CardV3 />
        ))}
      </div>
    </div>
  );
};

export default ListOfCardsV3;
