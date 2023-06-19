import React from "react";

const CardV3 = ({
  name = "Fornite",
  price = "Gratis",
  type = "Complemento",
  image = "https://cdn1.epicgames.com/offer/fn/24BR_S24_EGS_Launcher_Blade_2560x1440_2560x1440-437d0424d02f5fd286ab659ddade30db?h=480&quality=medium&resize=1&w=854",
}) => {
  return (
    <div className="card-v3-container">
      <div className="cardv3-image">
        <img src={image} alt="" />
      </div>

      <div className="cardv3-text">
        <div className="cardv3-game-type">{type}</div>

        <div className="cardv3-name">{name}</div>

        <div className="cardv3-price">{price}</div>
      </div>
    </div>
  );
};
export default CardV3;
