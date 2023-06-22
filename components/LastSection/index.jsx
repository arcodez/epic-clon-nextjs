import React from "react";
import ListOfCardsV2 from "../ListOfCardsV2";

const cardslastsection = [
  {
    cardImage:
      "https://cdn2.unrealengine.com/egs-sales-specials-breaker-1280x721-8d81919a48e5.jpg?h=480&quality=medium&resize=1&w=854",
    cardTitle: "Ofertas y promociones",
    cardDesc:
      "Ahorra a Io grande en grandes titulos y en joyas ocultas. iEn la Epic Games Store siempre hay algo en oferta!",
    cardPrice: "Explorar",
  },
  {
    cardImage:
      "https://cdn2.unrealengine.com/egs-free-games-breaker-may-2023-1920x1080-3d7b336fd40c.jpg?h=480&quality=medium&resize=1&w=854",
    cardTitle: "Juegos gratis",
    cardDesc:
      "Explora juegos gratis de nuestra colecci6n.Vuelve todos los jueves para disfrutar de un nuevo juego gratis!",
    cardPrice: "Jugar ya",
  },
  {
    cardImage:
      "https://cdn2.unrealengine.com/egs-non-game-apppromo-blog-1920x1080-59bd51d9d448.jpg?h=480&quality=medium&resize=1&w=854",
    cardTitle: "Aplicaciones",
    cardDesc:
      "iDisfruta de algunas de las mejores aplicaciones de müsica, juegos, creaciön y mucho mås!",
    cardPrice: "Explorar",
  },
];

const LastSection = () => {
  return (
    <div>
      <ListOfCardsV2 cards={cardslastsection} />
    </div>
  );
};

export default LastSection;
