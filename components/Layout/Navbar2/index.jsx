import React from "react";

const Navbar2 = () => {
  return (
    <div className="navbar2">
      <div className="navbar2-section-1">
        <div className="navbar2-search-bar">
          <input type="search-title" placeholder="Buscar en la tienda" />
        </div>

        <ul className="nav2-section1-links">
          <li className="nav2-section1-link">Descubrir</li>
          <li className="nav2-section1-link">Explorar</li>
          <li className="nav2-section1-link">Noticias</li>
        </ul>
      </div>

      <div className="navbar2-section-2">
        <ul className="nav2-section2-links">
          <li className="nav2-section2-link">Lista de Deseos</li>
          <li className="nav2-section2-link">Carrito</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar2;
