import React from "react";

const CardVColumn = ({
  image = "https://cdn1.epicgames.com/offer/cbd5b3d310a54b12bf3fe8c41994174f/valtall_1200x1600-300d8e4cb9bee9dbb1166b574b3bdc93?h=480&quality=medium&resize=1&w=360",
  title = "Valorant",
  price = "Gratis",
}) => {
  return (
    <div className="card-column-container">
      <div className="cardvcolumn-content">
        <div className="cardvcolumn-image">
          <img src={image} alt="" />
        </div>

        <div className="cardvcolumn-text">
          <div className="cardvcolumn-title">
            <h2>{title}</h2>
          </div>

          <div className="cardvcolumn-price-container">
            <div className="cardvcolumn-percentaje"></div>
            <div className="cardvcolumn-price-offer"></div>
            <div className="cardvcolumn-price">{price}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardVColumn;
