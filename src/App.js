// import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";
import Advertiser from "./components/Advertiser/Advertiser";
import React from "react";
import { useState, useEffect } from "react";
import CartContext from "./CartContext";
import TotalContext from "./TotalContext";

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

  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  return (
    <React.Fragment>
      <Advertiser />
      <CartContext.Provider value={[cart, setCart]}>
        <TotalContext.Provider value={[total, setTotal]}>
          <Header categories={categories} categoryFilter={categoryFilter} />
          <Products products={products} />
        </TotalContext.Provider>
      </CartContext.Provider>
    </React.Fragment>
  );
}

export default App;
