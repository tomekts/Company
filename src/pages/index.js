import React, { useState, useEffect } from "react";
import "../styles/index.scss";
import facebookIcon from "../images/facebook.svg";
import snapIcon from "../images/snap.svg";
import advertisementImage1 from "../images/advertisement1.png";
import advertisementImage2 from "../images/advertisement2.png";
import advertisementImage3 from "../images/advertisement3.png";
import advertisementImage4 from "../images/advertisement4.png";
import arrowNext from "../images/arrow_right.svg";
import arrowBack from "../images/arrow_left.svg";
import wallet from "../images/wallet.svg";
import tea from "../images/tea.svg";
import shelf from "../images/shelf.svg";
import desk from "../images/desk.svg";
import room from "../images/room.svg";
import people from "../images/people.svg";
import computer from "../images/computer.svg";
import compareImage from "../images/compare.png";
import squareIcon from "../images/square.svg";
import topicalityImage1 from "../images/topicality1.png";
import topicalityImage2 from "../images/topicality2.png";
import topicalityImage3 from "../images/topicality3.png";
import galeryImage1 from "../images/galery1.png";
import galeryImage2 from "../images/galery2.png";
import galeryImage3 from "../images/galery3.png";
import galeryImage4 from "../images/galery4.png";
import LogoAdream from "../images/logo_adream.png";
import Slider from "./Component/Slider";
import footerSquere from "../images/footer_squere.svg";

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
        {/* secion compare */}
        <div className="compare">
          <div className="line"></div>
          <div className="text">
            <p className="font-65px font-bold">
              Lorem ipsum <br></br>
              vs własne biuro
            </p>
          </div>
          <div className="square">
            <img src={squareIcon}></img>
          </div>
          <div className="image">
            <img src={compareImage}></img>
          </div>
        </div>
        {/* end secion compare */}
        {/* section topicality */}
        <div className="topicality">
          <div className="main-text">
            <p className="font-65px font-bold">Aktualności</p>
          </div>
          <div className="container">
            <div className="box">
              <img src={topicalityImage1}></img>
              <p style={{ marginTop: "33px" }} className="font-18px">
                01.01.2021
              </p>
              <p style={{ marginTop: "16px" }} className="font-28px font-bold">
                Lorem ipsum dolor sit amet,<br></br> consectetur adipiscing
                elit.
              </p>
              <a style={{ marginTop: "19px" }} href="">
                Więcej
              </a>
            </div>
            <div style={{ marginLeft: "110px" }} className="box">
              <img src={topicalityImage2}></img>
              <p style={{ marginTop: "33px" }} className="font-18px">
                01.01.2021
              </p>
              <p style={{ marginTop: "16px" }} className="font-28px font-bold">
                Lorem ipsum dolor sit amet,<br></br> consectetur adipiscing
                elit.
              </p>
              <a style={{ marginTop: "19px" }} href="">
                Więcej
              </a>
            </div>
            <div style={{ marginLeft: "110px" }} className="box">
              <img src={topicalityImage3}></img>
              <p style={{ marginTop: "33px" }} className="font-18px">
                01.01.2021
              </p>
              <p style={{ marginTop: "16px" }} className="font-28px font-bold">
                Lorem ipsum dolor sit amet,<br></br> consectetur adipiscing
                elit.
              </p>
              <a style={{ marginTop: "19px" }} href="">
                Więcej
              </a>
            </div>{" "}
          </div>
        </div>
        {/* end section topicality */}
        {/* section galery */}
        <div className="galery">
          <div className="left-site">
            <div className="arrow">
              <img src={arrowBack} alt="przejdz"></img>
            </div>
            <div className="image">
              <img src={galeryImage1}></img>
            </div>
          </div>
          <div className="main-site">
            <div className="up-image">
              <img src={galeryImage2}></img>
            </div>
            <div className="down-image">
              <img src={galeryImage3}></img>
            </div>
          </div>
          <div className="right-site">
            <div className="arrow">
              <img src={arrowNext} alt="przejdz"></img>
            </div>
            <div className="text">
              <p className="font-65px font-bold">Galeria</p>
              <div className="line"></div>
            </div>
            <div className="image">
              <img src={galeryImage4}></img>
            </div>
          </div>
        </div>
        {/* end section galery */}
        {/* footer */}
        <div className="footer">
          <div className="square">
            <img src={footerSquere}></img>
          </div>
          <div className="left-site">
            <p style={{ marginTop: "80px" }} className="font-65px font-bold">
              LOGO
            </p>

            <p style={{ marginTop: "57px" }} className="font-16px">
              ul. Towarowa 5/6 <br></br> 31-000 Kraków
            </p>
            <p></p>
            <p className="font-16px font-bold">
              +48 999 999 999 <br></br>email@email.com
            </p>
            <p
              style={{ marginTop: "147px", marginBottom: "51px" }}
              className="font-12px"
            >
              Polityka prywatności
            </p>
          </div>
          <div className="main-site font-16px">
            <div className="coll">
              <ul>
                <li>Strona główna</li>
                <li>Poznaj przestrzeń</li>
                <li>Oferta</li>
              </ul>
            </div>
            <div className="coll">
              <ul>
                <li>Lokalizacja</li>
                <li>Własne biuro</li>
                <li>Kontakt</li>
              </ul>
            </div>
          </div>
          <div className="rigth-site">
            <div className="text">
              <p className="font-12px">Proudly designed by</p>
              <img src={LogoAdream}></img>
            </div>
          </div>
        </div>
        {/* end footer */}
      </body>
    </>
  );
};

export default IndexPage;
