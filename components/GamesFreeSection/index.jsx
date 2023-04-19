import React from "react";
import ListOfCardsFree from "../ListOfCardsFree";

const GamesFreeSection = () => {
  return (
    <div className="games-free-section">
      <div className="games-free-title-container">
        <div className="games-free-title-section">
          <div className="games-free-gift-icon">
            <img src="/gifticon.svg" alt="" />
          </div>
          <div className="games-free-title">Juegos Gratuitos</div>
        </div>

        <div className="games-free-more-button">VER MÁS</div>
      </div>

      <ListOfCardsFree />
    </div>
  );
};

export default GamesFreeSection;
