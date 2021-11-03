// import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";
import Advertiser from "./components/Advertiser/Advertiser";
import React from "react";
import { useState, useEffect } from "react";

function App() {
  const [allProducts, setAllProducts] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setAllProducts(data);
        setProducts(data);
      });
  }, []);

  const categories = allProducts
    .map((p) => p.category)
    .filter((value, index, array) => array.indexOf(value) === index);

  const categoryFilter = (e) => {
    if (e.target.value === "All") {
      setProducts(allProducts);
    } else {
      const filterCategory = allProducts.filter(
        (p) => p.category === e.target.value
      );
      setProducts(filterCategory);
    }
  };

  return (
    <React.Fragment>
      <Header categories={categories} categoryFilter={categoryFilter} />
      <Advertiser />
      <Products products={products} />
    </React.Fragment>
  );
}

export default App;
