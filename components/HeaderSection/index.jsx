import React, { useState } from "react";

const headerInfo = [
  {
    headerCardImg:
      "https://cdn2.unrealengine.com/egs-di2-carousel-desktop-1920x1080-8c0c3775bb3a.jpg?h=720&quality=medium&resize=1&w=1280",
    headerCardTitle: "Dead Island 2",
    headerCardTitleImg:
      "https://cdn2.unrealengine.com/egs-deadisland2goldedition-deepsilverdambusterstudios-editions-ic1-200x96-00fbc377526a.png?h=270&quality=medium&resize=1&w=480",
    headerCardDesc:
      "Explora la emblemática ciudad de Los Ángeles, pero bañada en sangre, yevoluciona para convertirte en el matazombis definitivo.",
    headerPrice: "A partir de 59,99 US$",
    headerAvalaible: "Disponible el 21 de abril",
  },
  {
    headerCardImg:
      "https://cdn2.unrealengine.com/spring-sale-desktop-carousel-frame-1-1920x1080-e4e89283a7b6.jpg",
    headerCardTitle: "Ofertas de Primavera",
    headerCardTitleImg:
      "https://cdn2.unrealengine.com/es-spring-sale-thumbnail-1200x1600-bb7188e8e49b.jpg?h=128&quality=medium&resize=1&w=96",
    headerCardDesc:
      "El tiempo se acaba. Ahorra a Io grande en los mejores juegos y complementos durante las ofertas de primavera.",
    headerPrice: "",
    headerAvalaible: "ULTlMA OPORTUNIDAD PARA AHORRAR",
  },
  {
    headerCardImg:
      "https://cdn2.unrealengine.com/egs-honkai-star-rail-carousel-desktop-1248x702-57af85f15319.jpg?h=720&quality=medium&resize=1&w=1280",
    headerCardTitle: "Honkai: Star Rail",
    headerCardDesc:
      "Sube al Expreso Astra1 y descubre las maravillas infinitas de Ia galaxia en este viaje Ileno de emoción y aventuras.",
    headerCardTitleImg:
      "https://cdn2.unrealengine.com/egs-honkaistarrail-cognospherepteltd-ic1-400x400-17320c9b03ed.png?h=270&quality=medium&resize=1&w=480",
    headerPrice: "A partir de 59,99 US$",
    headerAvalaible: "Disponible el 21 de abril",
  },
  {
    headerCardImg:
      "https://cdn2.unrealengine.com/egs-crime-boss-carousel-desktop-1248x720-7cbd5b7a64a6.jpg?h=720&quality=medium&resize=1&w=1280",
    headerCardTitle: "Crime Boss: Rockay City",
    headerCardTitleImg:
      "https://cdn2.unrealengine.com/egs-crimebossrockaycity-ingamestudios-ic1-400x400-136aa5dbda57.png?h=270&quality=medium&resize=1&w=480",
    headerCardDesc:
      "Adopta el papel de Travis Baker, hombre con un objetivo: convert se, crimen a crimen, en el nuevorey ela ciudad de Rockay.",
    headerPrice: "A partir de 21,99 US$",
    headerAvalaible: "EXCLUSIVO DE EGS",
  },
  {
    headerCardImg:
      "https://cdn2.unrealengine.com/egs-jedi-survivor-carousel-desktop-1280x702-e064efcb1338.jpg?h=720&quality=medium&resize=1&w=1280",
    headerCardTitle: "STAR WARS: Jedi:...",
    headerCardTitleImg:
      "https://cdn2.unrealengine.com/egs-starwarsjedisurvivor-respawnentertainment-ic1-400x400-9b72934cd58b.png?h=270&quality=medium&resize=1&w=480",
    headerCardDesc:
      "La historia de Cal Kestis continua! Precompra el juego ya para vestir a  Cal con el pack cosmético Jedi Survival",
    headerPrice: "A partir de 69,99 US$",
    headerAvalaible: "PRÖXIMAMENTE",
  },
  {
    headerCardTitle: "Genshi Impact",
    headerCardImg:
      "https://cdn2.unrealengine.com/egs-genshin-impact-3-6-carousel-desktop-1248x702-0ea1444f595c.jpg?h=720&quality=medium&resize=1&w=1280",
    headerCardTitleImg:
      "https://cdn2.unrealengine.com/egs-genshinimpact-mihoyolimited-ic1-400x400-0a1ff1b6cf40.png?h=270&quality=medium&resize=1&w=480",
    headerCardDesc:
      "Experimenta la primera gran celebraci6n de la Academia. Coil a Baizhu y a Kaveh y descubre u nueva zona desiekta con oasis.",
    headerPrice: "Gratis",
    headerAvalaible: "VERSION 3.6 YA DISPONIBLE",
  },
];

const HeaderCard = ({
  headerCardImg = "https://cdn2.unrealengine.com/egs-di2-carousel-desktop-1920x1080-8c0c3775bb3a.jpg?h=720&quality=medium&resize=1&w=1280",
  headerCardTitle = "Dead Island 2",
  handleClick,
}) => {
  return (
    <div onClick={handleClick} className="header-section-cards">
      <div className="header-section-card">
        <img
          className="header-section-card-image"
          src={headerCardImg}
          alt={headerCardTitle}
        />
        <div className="header-section-card-name">{headerCardTitle}</div>
      </div>
    </div>
  );
};

const HeaderSection = () => {
  const [headerTitleImg, setHeaderTitleImg] = useState(
    "https://cdn2.unrealengine.com/egs-deadisland2goldedition-deepsilverdambusterstudios-editions-ic1-200x96-00fbc377526a.png?h=270&quality=medium&resize=1&w=480"
  );
  const [headerImage, setHeaderImage] = useState(
    "https://cdn2.unrealengine.com/egs-di2-carousel-desktop-1920x1080-8c0c3775bb3a.jpg?h=720&quality=medium&resize=1&w=1280"
  );
  const [headerDescription, setHeaderDescription] = useState(
    "Explora la emblemática ciudad de Los Ángeles, pero bañada en sangre, yevoluciona para convertirte en el matazombis definitivo."
  );
  const [headerPrice, setHeaderPrice] = useState("A partir de 59,99 US$");
  const [headerAvailable, setHeaderAvailable] = useState(
    "Disponible el 21 de abril"
  );

  const handleChangeInfoHeader = (card) => {
    setHeaderTitleImg(card.headerCardTitleImg);
    setHeaderAvailable(card.headerAvalaible);
    setHeaderPrice(card.headerPrice);
    setHeaderDescription(card.headerCardDesc);
    setHeaderImage(card.headerCardImg);
  };

  return (
    <div className="header-section">
      <div className="header-section1">
        <div className="header-section-image">
          <img src={headerImage} alt="#" />
        </div>
      </div>

      <div className="header-section2">
        <div className="header-section-cards">
          {headerInfo.map((card, index) => (
            <HeaderCard
              key={index}
              handleClick={() => handleChangeInfoHeader(card)}
              {...card}
            />
          ))}
        </div>
      </div>

      <div className="header-image-content">
        <div className="header-image-title">
          <img src={headerTitleImg} alt="" />
        </div>

        <div className="header-image-avalaibility">{headerAvailable}</div>

        <div className="header-image-description">{headerDescription}</div>

        <div className="header-image-section3">
          <div className="header-image-price">{headerPrice}</div>

          <div className="header-image-section-list">
            <button className="header-image-button">Precómpralo ya</button>

            <div className="header-image-button-add">
              <button className="header-add-button">+</button>
              <div className="header-image-button-add-description">
                A la lista de deseos
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderSection;
