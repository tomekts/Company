import React, { useState, useEffect } from "react";
import "../styles/index.scss";
import facebookIcon from "../images/facebook.svg";
import snapIcon from "../images/snap.svg";
import advertisementImage1 from "../images/advertisement1.png";
import advertisementImage2 from "../images/advertisement2.png";
import advertisementImage3 from "../images/advertisement3.png";
import advertisementImage4 from "../images/advertisement4.png";
import arrowNext from "../images/arrow_right.svg";
import wallet from "../images/wallet.svg";
import tea from "../images/tea.svg";
import shelf from "../images/shelf.svg";
import desk from "../images/desk.svg";
import room from "../images/room.svg";
import people from "../images/people.svg";
import computer from "../images/computer.svg";

import Slider from "./Component/Slider";

// styles

// data

// markup
const IndexPage = () => {
  return (
    <>
      <body>
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
              <img
                className="picture"
                alt="Bład zdjęcia"
                src={advertisementImage1}
              ></img>
              <div className="text">
                <div className="square"></div>
                <p className="font-28px font-bold name">Biuro</p>
                <div className="line"></div>
                <p className="price font-18px">od 1000zł/msc</p>
              </div>
              <div className="arrow-in-image">
                <img src={arrowNext} alt="przejdz"></img>
              </div>
            </div>
            <div
              className="advertisement-up-line-image-container"
              style={{ marginLeft: "30px" }}
            >
              <img
                className="picture"
                alt="Bład zdjęcia"
                src={advertisementImage2}
              ></img>
              <div className="text">
                <div className="square"></div>
                <p className="font-28px font-bold name">
                  Lorem ipsum <br></br>Biuro
                </p>
                <div className="line"></div>
                <p className="price font-18px">od 500zł/msc</p>
              </div>
              <div className="arrow-in-image">
                <img src={arrowNext} alt="przejdz"></img>
              </div>
            </div>
          </div>
          <div className="advertisement-down-line">
            <div className="advertisement-down-line-image-container">
              <img
                className="picture"
                alt="Bład zdjęcia"
                src={advertisementImage3}
              ></img>
              <div className="text">
                <div className="square"></div>
                <p className="font-28px font-bold name">Biuro lorem</p>
                <div className="line"></div>
                <p className="price font-18px">od 100zł/h</p>
              </div>
              <div className="arrow-in-image">
                <img src={arrowNext} alt="przejdz"></img>
              </div>
            </div>
            <div
              className="advertisement-down-line-image-container"
              style={{ marginLeft: "30px" }}
            >
              <img
                className="picture"
                alt="Bład zdjęcia"
                src={advertisementImage4}
              ></img>
              <div className="text">
                <div className="square"></div>
                <p className="font-28px font-bold name">
                  Biuro lorem ipsum <br></br>Lorem
                </p>
                <div className="line line-next"></div>
                <p className="price font-18px">od 100zł/h</p>
              </div>
              <div className="arrow-in-image">
                <img src={arrowNext} alt="przejdz"></img>
              </div>
            </div>
          </div>
        </div>
        {/* end section advertisement */}
        {/* section equipment */}
        <div className="equipment">
          <div className="equipment-up-line">
            <div className="text-equipment">
              <p className="font-48px font-bold">
                Lorem <br></br>ipsum dolor <br></br>sit amet, <br></br>conse
              </p>
              <div className="line"></div>
            </div>
            <div className="box">
              <div className="image-container">
                <img src={wallet}></img>
              </div>
              <div className="text-container">
                <p className="font-28px">Lorem ipsum</p>
              </div>
            </div>
            <div style={{ marginLeft: "30px" }} className="box">
              <div className="image-container">
                <img src={tea}></img>
              </div>
              <div className="text-container">
                <p className="font-28px">
                  Lorem ipsum <br></br>dolor sit amet conse
                </p>
              </div>
            </div>
            <div className="box">
              <div className="image-container">
                <img src={shelf}></img>
              </div>
              <div className="text-container">
                <p className="font-28px">
                  Lorem ipsum <br></br>dolor sit amet, conse
                </p>
              </div>
            </div>
          </div>
          <div className="equipment-down-line">
            <div className="box">
              <div className="image-container">
                <img src={computer}></img>
              </div>
              <div className="text-container">
                <p className="font-28px">
                  Lorem ipsum <br></br>
                  dolor sit amet, conse
                </p>
              </div>
            </div>
            <div className="box">
              <div className="image-container">
                <img src={desk}></img>
              </div>
              <div className="text-container">
                <p className="font-28px">
                  Lorem ipsum dolor sit <br></br> amet, conse lorem <br></br>
                  ipsum lorem ipsum
                </p>
              </div>
            </div>
            <div style={{ marginLeft: "30px" }} className="box">
              <div className="image-container">
                <img src={room}></img>
              </div>
              <div className="text-container">
                <p className="font-28px">
                  Lorem ipsum dolor sit <br></br> amet, conse <br></br>lorem
                  ipsum lorem
                </p>
              </div>
            </div>
            <div className="box">
              <div className="image-container">
                <img src={people}></img>
              </div>
              <div className="text-container">
                <p className="font-28px">
                  Lorem ipsum dolor sit <br></br> amet, conse lorem <br></br>
                  ipsum
                </p>
              </div>
            </div>
          </div>
          <div className="equipment-button">
            <button>DOWIEDZ SIĘ WIĘCEJ</button>
            <div className="arrow">
              <img src={arrowNext}></img>
            </div>
          </div>
        </div>
        {/* end section equipment */}
      </body>
    </>
  );
};

export default IndexPage;
