import React from "react";

const CardV2 = ({
  cardImage = "https://cdn2.unrealengine.com/egs-pid-pub-sale-april-2023-breaker-1920x1080-0f910e34922c.jpg?h=480&quality=medium&resize=1&w=854",
  cardTitle = "Semana de Plug In Digital, PID Games y Dear Villagers 2023",
  cardDesc = "Disfruta de increibles descuentos en las joyas indie mås recientes de Dear Villagers, PID Games y mås.",
  cardPrice = "Ahorra Hoy",
}) => {
  return (
    <div className="cardv2-container">
      <div className="cardv2-image">
        <img src={cardImage} alt={cardTitle} />
      </div>

      <div className="cardv2-title">
        <h2>{cardTitle}</h2>
      </div>

      <div className="cardv2-desc">
        <p>{cardDesc}</p>
      </div>

      <div className="cardv2-price">
        <p>{cardPrice}</p>
      </div>
    </div>
  );
};

export default CardV2;
