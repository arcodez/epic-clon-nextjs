import React from "react";

const CardV1 = () => {
  return (
    <div className="cardv1-container">
      <div className="cardv1-image">
        <img src="#" alt="#" />
      </div>

      <p className="cardv1-desc">Juego Base</p>
      <div className="cardv1-title">Just Cause Battle</div>

      <div className="cardv1-price-section">
        <div className="cardv1-offer">-15%</div>

        <div className="cardv1-prices">
          <div className="cardv1-price-before">21.89 US</div>
          <div className="cardv1-price-after">18.69 US</div>
        </div>
      </div>
    </div>
  );
};

export default CardV1;
