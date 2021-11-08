import "./Header.css";
import Cart from "../Cart/Cart";
import { useState, useContext } from "react";
import TotalContext from "../../TotalContext";
// import CartContext from "../../CartContext";
// import { useEffect } from "react/cjs/react.development";

function Header({ categories, categoryFilter }) {
  const [showCart, setShowCart] = useState(false);

  const [total] = useContext(TotalContext);

  return (
    <nav className="product-filter">
      <h1>GoCode Shop</h1>

      <div className="sort">
        <div className="collection-sort">
          <label>Filter by:</label>
          <select onChange={categoryFilter}>
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
