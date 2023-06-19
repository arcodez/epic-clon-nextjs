import React from "react";

const CardVColumn = ({ image = "", title = "" }) => {
  return (
    <div className="card-column-container">
      <div className="cardvcolumn-image">
        <img src={image} alt="" />
      </div>

      <div className="cardvcolumn-title">
        <h2>{title}</h2>
      </div>

      <div className="cardvcolumn-price-container">
        <div className="cardvcolumn-percentaje"></div>
        <div className="cardvcolumn-price-offer"></div>
        <div className="cardvcolumn-price"></div>
      </div>
    </div>
  );
};

export default CardVColumn;
