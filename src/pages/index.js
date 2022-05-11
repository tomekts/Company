import React, { useState, useEffect } from "react";
import "../styles/index.scss";
import facebookIcon from "../images/facebook.svg";
import snapIcon from "../images/snap.svg";
import advertisementImage1 from "../images/advertisement1.png";
import advertisementImage2 from "../images/advertisement2.png";
import advertisementImage3 from "../images/advertisement3.png";
import advertisementImage4 from "../images/advertisement4.png";
import arrowNext from "../images/arrowAdvertisement.svg";

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
      {/* section advertisement */}
      <div className="advertisement">
        <div className="advertisement-up-line">
          <div className="advertisement-up-line-image-container">
            <img alt="Bład zdjęcia" src={advertisementImage1}></img>
            <div className="text">
              <div className="square"></div>
              <p className="font-28px font-bold name">Biuro</p>
              <div className="line"></div>
              <p className="price font-18px">od 1000zł/msc</p>
            </div>
            <div className="arrow-in-image">
              <img src={arrowNext}></img>
            </div>
          </div>
          <div
            className="advertisement-up-line-image-container"
            style={{ marginLeft: "30px" }}
          >
            <img alt="Bład zdjęcia" src={advertisementImage2}></img>
            <div className="text">
              <div className="square"></div>
              <p className="font-28px font-bold name">
                Lorem ipsum <br></br>Biuro
              </p>
              <div className="line"></div>
              <p className="price font-18px">od 500zł/msc</p>
            </div>
            <div className="arrow-in-image">
              <img src={arrowNext}></img>
            </div>
          </div>
        </div>
        <div className="advertisement-down-line">
          <div className="advertisement-down-line-image-container">
            <img alt="Bład zdjęcia" src={advertisementImage3}></img>
            <div className="text">
              <div className="square"></div>
              <p className="font-28px font-bold name">Biuro lorem</p>
              <div className="line"></div>
              <p className="price font-18px">od 100zł/h</p>
            </div>
            <div className="arrow-in-image">
              <img src={arrowNext}></img>
            </div>
          </div>
          <div
            className="advertisement-down-line-image-container"
            style={{ marginLeft: "30px" }}
          >
            <img alt="Bład zdjęcia" src={advertisementImage4}></img>
            <div className="text">
              <div className="square"></div>
              <p className="font-28px font-bold name">
                Biuro lorem ipsum <br></br>Lorem
              </p>
              <div className="line line-next"></div>
              <p className="price font-18px">od 100zł/h</p>
            </div>
            <div className="arrow-in-image">
              <img src={arrowNext}></img>
            </div>
          </div>
        </div>
      </div>
      {/* end section advertisement */}
    </>
  );
};

export default IndexPage;
