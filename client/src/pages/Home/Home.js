// import logo from "./logo.svg";
import "./Home.css";
import Header from "../../components/Header/Header";
import Products from "../../components/Products/Products";
import Advertiser from "../../components/Advertiser/Advertiser";
import React from "react";
import { useState, useEffect } from "react";
import CartContext from "../../CartContext";
import TotalContext from "../../TotalContext";
import PriceContext from "../../PriceContext";

function Home() {
  const [allProducts, setAllProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const [minMax, setMinMax] = useState([0, 1000]);
  const [price, setPrice] = useState([0, 1000]);
  const [category, setCategory] = useState("all");

  useEffect(() => {
    fetch("/api/products")
      .then((response) => response.json())
      .then((data) => {
        setAllProducts(data);
        setProducts(data);
      });
  }, []);

  const categories = allProducts
    .map((p) => p.category)
    .filter((value, index, array) => array.indexOf(value) === index);

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handlePriceChange = (price) => {
    setPrice(price);
  };

  useEffect(() => {
    if (allProducts.length > 0) {
      const productWithMinPrice = allProducts.reduce((prev, curr) =>
        prev.price < curr.price ? prev : curr
      );

      const productWithMaxPrice = allProducts.reduce((prev, curr) =>
        prev.price > curr.price ? prev : curr
      );

      setMinMax([productWithMinPrice.price, productWithMaxPrice.price]);
      setPrice([productWithMinPrice.price, productWithMaxPrice.price]);
    }
  }, [allProducts]);

  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  return (
    <React.Fragment>
      <Advertiser />
      <CartContext.Provider value={[cart, setCart]}>
        <TotalContext.Provider value={[total, setTotal]}>
          <PriceContext.Provider value={[minMax, setMinMax, price, setPrice]}>
            <Header
              categories={categories}
              handleCategoryChange={handleCategoryChange}
              handlePriceChange={handlePriceChange}
            />
            <Products products={products} price={price} category={category} />
          </PriceContext.Provider>
        </TotalContext.Provider>
      </CartContext.Provider>
    </React.Fragment>
  );
}

export default Home;
