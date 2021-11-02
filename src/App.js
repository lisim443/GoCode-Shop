// import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";
import Advertiser from "./components/Advertiser/Advertiser";
import React from "react";
import { useState, useEffect } from "react";

function App() {
  const [productsList, setProductsList] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((productsList) => setProductsList(productsList));
  }, []);

  const categories = productsList
    .map((p) => p.category)
    .filter((value, index, array) => array.indexOf(value) === index);

  const categoryFilter = (e) => {
    if (e.target.value === "All") {
      setProductsList(productsList);
    } else {
      const filterProduct = productsList.filter(
        (p) => p.category === e.target.value
      );
      setProductsList(filterProduct);
    }
  };

  return (
    <React.Fragment>
      <Header categories={categories} categoryFilter={categoryFilter} />
      <Advertiser />
      <Products productsList={productsList} />
    </React.Fragment>
  );
}

export default App;
