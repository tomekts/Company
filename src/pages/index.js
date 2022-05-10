import React, { useState, useEffect } from "react";
import "../styles/index.scss";
import facebookIcon from "../images/facebook.svg";
import snapIcon from "../images/snap.svg";

import Slider from "./Component/Slider";

// styles

// data

// markup
const IndexPage = () => {
  return (
    <>
      {/* navbar */}
      <div className="navbar">
        <div className="navbar-logo font-48px font-bold">LOGO</div>
        <div className="navbar-list font-16px">
          <ul>
            <li>Poznaj przestrzeń</li>
            <li>Oferta</li>
            <li>Lokalizacja</li>
            <li>Własne biuro</li>
            <li>Kontakt</li>
          </ul>
          <div className="navbar-social">
            <img src={facebookIcon} alt="Facebook logo" />
            <img
              style={{ marginLeft: "23px" }}
              src={snapIcon}
              alt="Snap logo"
            />
          </div>
        </div>
      </div>
      {/* end navbar */}
      {/* section hero */}
      <Slider />
      {/* end section hero */}
      <div>testowu wpis</div>
    </>
  );
};

export default IndexPage;
