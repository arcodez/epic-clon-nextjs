import React from "react";

const headerInfo = [
  {
    headerCardImg:
      "https://cdn2.unrealengine.com/egs-di2-carousel-desktop-1920x1080-8c0c3775bb3a.jpg?h=720&quality=medium&resize=1&w=1280",
    headerCardTitle: "Dead Island 2",
  },
  {
    headerCardImg:
      "https://cdn2.unrealengine.com/egs-di2-carousel-desktop-1920x1080-8c0c3775bb3a.jpg?h=720&quality=medium&resize=1&w=1280",
    headerCardTitle: "Dead Island 2",
  },
  {
    headerCardImg:
      "https://cdn2.unrealengine.com/egs-di2-carousel-desktop-1920x1080-8c0c3775bb3a.jpg?h=720&quality=medium&resize=1&w=1280",
    headerCardTitle: "Dead Island 2",
  },
  {
    headerCardImg:
      "https://cdn2.unrealengine.com/egs-di2-carousel-desktop-1920x1080-8c0c3775bb3a.jpg?h=720&quality=medium&resize=1&w=1280",
    headerCardTitle: "Dead Island 2",
  },
  {
    headerCardImg:
      "https://cdn2.unrealengine.com/egs-di2-carousel-desktop-1920x1080-8c0c3775bb3a.jpg?h=720&quality=medium&resize=1&w=1280",
    headerCardTitle: "Dead Island 2",
  },
  {
    headerCardImg:
      "https://cdn2.unrealengine.com/egs-di2-carousel-desktop-1920x1080-8c0c3775bb3a.jpg?h=720&quality=medium&resize=1&w=1280",
    headerCardTitle: "Dead Island 2",
  },
];

const HeaderCard = () => {
  return (
    <div className="header-section-cards">
      <div className="header-section-card">
        <img
          className="header-section-card-image"
          src="https://cdn2.unrealengine.com/egs-di2-carousel-desktop-1920x1080-8c0c3775bb3a.jpg?h=720&quality=medium&resize=1&w=1280"
          alt="The Last of Us™ Parte I"
        />
        <div className="header-section-card-name">Dead Island 2</div>
      </div>
    </div>
  );
};

const HeaderSection = () => {
  return (
    <div className="header-section">
      <div className="header-section1">
        <div className="header-section-image">
          <img
            src="https://cdn2.unrealengine.com/egs-di2-carousel-desktop-1920x1080-8c0c3775bb3a.jpg?h=720&quality=medium&resize=1&w=1280"
            alt="#"
          />
        </div>
      </div>

      <div className="header-section2">
        <div className="header-section-cards">
          {[1, 2, 3, 4, 5, 6].map((card, index) => (
            <HeaderCard key={index} />
          ))}
        </div>
      </div>

      <div className="header-image-content">
        <div className="header-image-title">
          <img
            src="https://cdn2.unrealengine.com/egs-deadisland2goldedition-deepsilverdambusterstudios-editions-ic1-200x96-00fbc377526a.png?h=270&quality=medium&resize=1&w=480"
            alt=""
          />
        </div>

        <div className="header-image-avalaibility">
          Disponible el 21 de abril
        </div>

        <div className="header-image-description">
          Explora la emblemática ciudad de Los Ángeles, pero bañada en sangre, y
          evoluciona para convertirte en el matazombis definitivo.
        </div>

        <div className="header-image-section3">
          <div className="header-image-price">A partir de 59,99 US$</div>

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
