import React from "react";
import Carousel from "../../Components/Carousel/Carousel.js";
import Order from "../../assets/order.png";
import ProductCard from "../../Components/ProductCard/ProductCard.js";
import ProductList from "../ProductList/ProductList";
import "./Home.css";
const Home = () => {
  return (
    <div>
      <div classNaame="home">
        <Carousel />
        <ProductList />
        <div ClassName="delivery">
          <img alt="Order" src={Order} width={100} />
          <h3>Contact Us for Delivery Help</h3>
        </div>
      </div>
    </div>
  );
};

export default Home;
