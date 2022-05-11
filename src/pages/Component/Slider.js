import React, { useState, useEffect } from "react";
import imageSlider1 from "../../images/hero1.png";
import imageSlider2 from "../../images/hero2.png";
import imageSlider3 from "../../images/hero3.png";
import arrowBack from "../../images/arrow_left.svg";
import arrowNext from "../../images/arrow_right.svg";
import "../../styles/Component/slider.scss";
function Slider() {
  let counter = 0;
  const next = () => {
    const countImage = document.querySelectorAll(".slider-image-container img");

    if (counter < countImage.length - 1) {
      counter++;
    } else {
      counter = 0;
    }
    countImage.forEach((element) => {
      element.classList.add("hidden-picture");
    });
    countImage[counter].classList.remove("hidden-picture");
  };
  const prev = () => {
    const countImage = document.querySelectorAll(".slider-image-container img");

    if (counter == 0) {
      counter = countImage.length - 1;
    } else {
      counter--;
    }

    countImage.forEach((element) => {
      element.classList.add("hidden-picture");
    });
    countImage[counter].classList.remove("hidden-picture");
  };

  return (
    <div className="slider-container">
      {/* section image */}
      <div className="slider-image-container">
        <img alt="Bład zdjęcia" src={imageSlider1}></img>
        <img
          alt="Bład zdjęcia"
          src={imageSlider2}
          className={"hidden-picture"}
        ></img>
        <img
          alt="Bład zdjęcia"
          src={imageSlider3}
          className={"hidden-picture"}
        ></img>
      </div>
      {/* end section image */}

      <div className="main-slider-container">
        <div className="text-in-content">
          <h1 className="font-bold">Firma</h1>
          <p className="font-48px" style={{ paddingTop: "18px" }}>
            Lorem ipsum dolor sit amet, <br></br>consectetur adipiscing elit. Ut
            auctor
          </p>
        </div>
        <div className="form-in-content">
          <div className="form">
            <div className="form-header">
              <p className="font-28px font-bold">
                Lorem ipsum <br></br> Lorem ipsum lorem ipsum
              </p>
              <p
                className="font-18px"
                style={{ color: "#727272", marginTop: "4px" }}
              >
                consectetur adipiscing elit. Ut auctor arcu
              </p>
              <p className="font-18px font-bold" style={{ marginTop: "13px" }}>
                Zostaw kontakt, zadzwonimy do Ciebie
              </p>
            </div>
            <div className="form-main">
              <div className="form-input-section">
                <input placeholder="Imię i nazwisko"></input>
                <input placeholder="Telefon"></input>
                <input placeholder="Email"></input>
                <input placeholder="Lorem ipsum lorem ipsum"></input>
              </div>
              <div className="agreement">
                <div>
                  <input type="checkbox"></input>
                </div>
                <div>
                  Wyrażam dobrowolną zgodę na przetwarzanie moich danych
                  osobowych więcej...
                </div>
              </div>
              <button className="form-button">WYŚLIJ</button>
            </div>
          </div>
        </div>
      </div>

      {/* button section */}
      <div className="button-slider-container">
        <div className="left">
          <img
            id="button-slider-prev"
            src={arrowBack}
            onClick={() => prev()}
          ></img>
        </div>
        <div className="right">
          {" "}
          <img
            id="button-slider-next"
            src={arrowNext}
            onClick={() => next()}
          ></img>
        </div>
      </div>
      {/* and button section */}
    </div>
  );
}

export default Slider;
