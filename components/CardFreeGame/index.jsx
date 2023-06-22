import React from "react";

const CardFreeGame = ({
  name = "MORDAHU",
  image = "https://cdn1.epicgames.com/offer/2bda08f9230144a19e98373cc4a6ac2d/EGS_MORDHAU_Triterniondoo_S2_1200x1600-3c795e67d44f02e4127ed4df435560f3?h=480&quality=medium&resize=1&w=360",
  price = "Gratis hasta el 20 abr a las 11:00",
}) => {
  return (
    <div className="card-free-game">
      <div className="card-game-image">
        <div className="game-free-image">
          <img src={image} alt={name} />
          <div className="card-game-tag" style={{ backgroundColor: "#0078f2" }}>
            Gratis
          </div>
        </div>
        <div className="card-game-title">{name}</div>
        <div className="card-game-time">{price}</div>
      </div>
    </div>
  );
};

export default CardFreeGame;
