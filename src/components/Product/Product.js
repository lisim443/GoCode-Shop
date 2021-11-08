import "./Product.css";
// import Counter from "./Counter";
import React, { useState, useContext } from "react";
import CartContext from "../../CartContext";

function Product({ image, title, price, id }) {
  const [cart, setCart] = useContext(CartContext);

  const [count, setCount] = useState(0);

  const addProduct = () => {
    setCount(count + 1);

    const currentProduct = cart[id] || { amount: count, title, price };
    currentProduct.amount = currentProduct.amount + 1;

    const newItems = { ...cart, [id]: currentProduct };

    setCart(newItems);
  };

  const removeProduct = () => {
    count > 0 && setCount(count - 1);

    const currentProduct = cart[id];
    let newCart;

    if (!currentProduct) return;

    currentProduct.amount = currentProduct.amount - 1;

    if (currentProduct.amount === 0) {
      newCart = { ...cart };
      delete newCart[id];
      setCart(newCart);
    } else {
      newCart = { ...cart, [id]: currentProduct };
    }

    setCart(newCart);
  };

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={image} alt="img" />
      </div>
      <div className="product-info">
        <h5>{title}</h5>
        <h6>${price}</h6>
        <span className="product-amount">
          <button onClick={removeProduct}>-</button>
          <span className="amount">{count}</span>
          <button onClick={addProduct}>+</button>
        </span>
      </div>
    </div>
  );
}

export default Product;
