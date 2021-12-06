import "./Header.css";
import Cart from "../Cart/Cart";
import { useState, useContext } from "react";
import TotalContext from "../../TotalContext";
import React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import PriceContext from "../../PriceContext";

function Header({ categories, handleCategoryChange, handlePriceChange }) {
  const [showCart, setShowCart] = useState(false);
  const [total] = useContext(TotalContext);
  const [minMax, setMinMax, price, setPrice] = useContext(PriceContext);

  const handleChange = (event, newValue) => handlePriceChange(newValue);

  return (
    <nav className="product-filter">
      <h1>GoCode Shop</h1>

      <div className="sort">
        <div className="collection-sort">
          <label>Filter by:</label>
          <select onChange={handleCategoryChange}>
            <option value="All">All</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <div className="collection-sort">
          <label>Sort by:</label>
          <select>
            <option value="/">Featured</option>
            <option value="/">Best Selling</option>
            <option value="/">Alphabetically, A-Z</option>
            <option value="/">Alphabetically, Z-A</option>
            <option value="/">Price, low to high</option>
            <option value="/">Price, high to low</option>
            <option value="/">Date, new to old</option>
            <option value="/">Date, old to new</option>
          </select>
        </div>
        <Box sx={{ width: 200 }} className="box">
          <Slider
            min={minMax[0]}
            max={minMax[1]}
            getAriaLabel={() => "Price range"}
            value={price}
            onChange={handleChange}
            valueLabelDisplay="auto"
          />
        </Box>
        <button
          className="cart-button"
          onClick={() => {
            setShowCart(!showCart);
          }}
        >
          Cart({total}) 🛒
        </button>
        {showCart && <Cart />}
      </div>
    </nav>
  );
}

export default Header;
