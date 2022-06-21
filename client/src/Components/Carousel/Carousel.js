import React from "react";
import Carousel from "react-bootstrap/Carousel";
import P from "../../assets/1.jpg";
import L from "../../assets/2.jpg";
import R from "../../assets/l.jpg";
import F from "../../assets/5.jpg";
const Carousell = () => {
  return (
    <div>
      <h2 ClassName="welcome">𝕎𝔼𝕃ℂ𝕆𝕄𝔼 𝕋𝕆 𝔸ℝ𝕆𝕄 𝕋𝔼ℂℍ</h2>
      <Carousel className="caroussize">
        <Carousel.Item interval="1500">
          <img
            width={500}
            height={500}
            className="d-block w-100"
            src={P}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item interval="1500">
          <img
            width={500}
            height={500}
            className="d-block w-100"
            src={L}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item interval="1500">
          <img
            width={500}
            height={500}
            className="d-block w-100 "
            src={F}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item interval="1500">
          <img
            width={500}
            height={500}
            className="d-block w-100 "
            src={R}
            alt="4 slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Carousell;
