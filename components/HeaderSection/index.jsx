import React from "react";

const HeaderCard = () => {
  return (
    <div className="header-section-cards">
      <div className="header-section-card">
        <img
          className="header-section-card-image"
          src="https://cdn2.unrealengine.com/egs-the-last-of-us-p1-carousel-thumb-1200x1600-23eff016493e.jpg?h=128&quality=medium&resize=1&w=96"
          alt="The Last of Us™ Parte I"
        />
        <div className="header-section-card-name">The Last of Us™ Parte I</div>
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
            src="https://cdn2.unrealengine.com/egs-last-of-us-part-1-carousel-desktop-1248x702-c88ddfa3eea0.jpg?h=720&quality=medium&resize=1&w=1280#"
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
    </div>
  );
};

export default HeaderSection;
