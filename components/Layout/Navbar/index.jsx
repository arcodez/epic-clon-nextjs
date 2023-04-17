import React from "react";
// Import the FontAwesomeIcon component
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import the icons you need
import {
  faSearch,
  faAmbulance,
  faAnchor,
  faGlobe,
  faGlobeAfrica,
  faPerson,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav className="navbar1">
      <div className="nav-section-1">
        <div className="nav-logo">
          <img src="/epic-logo.png" alt="" />
        </div>
        <div className="nav-section-1-link">Tienda</div>
        <div className="nav-section-1-link">Distribuicion</div>
        <div className="nav-section-1-link">Ayuda</div>

        <div className="nav-section-1-link"> | </div>
        <div className="nav-section-1-link">Unreal Engine</div>
      </div>

      <div className="nav-section-2">
        <div className="nav-section-2-link">
          {/* Planet */}
          <FontAwesomeIcon
            icon={faGlobe}
            style={{ fontSize: 14, color: "gray" }}
          />
        </div>
        <div className="nav-section-2-link">
          <FontAwesomeIcon
            icon={faUser}
            style={{ fontSize: 14, color: "white" }}
          />
        </div>
        <div className="nav-section-2-link">arcodez_es</div>
        <div
          className="nav-section-2-link take_epic"
          style={{ color: "white" }}
        >
          CONSIGUE EPIC GAMES
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
