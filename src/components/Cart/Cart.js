import "./Cart.css";
import { useContext, useEffect } from "react";
import CartContext from "../../CartContext";
import TotalContext from "../../TotalContext";

function Cart() {
  const [cart, setCart] = useContext(CartContext);
  const [total, setTotal] = useContext(TotalContext);

  const getTotal = (product) => {
    return Object.entries(product).reduce((acc, item) => {
      const amount = item[1].amount;
      return acc + amount;
    }, 0);
  };

  useEffect(() => {
    setTotal(getTotal(cart));
  }, [cart]);

  const items = Object.entries(cart).map(([key, value]) => {
    return (
      <div key={key} className="cart-item">
        <span>{value.title}</span>: <span>{value.amount}</span>, price:
        <span>${value.price * value.amount}</span>
      </div>
    );
  });

  const allPrice = Object.entries(cart).reduce((acc, item) => {
    const totalSum = item[1].price * item[1].amount;
    return acc + totalSum;
  }, 0);

  return (
    <div className="cart">
      <h2> Your Cart</h2>
      <span className="cart-text">{items}</span>
      <h6> You have {total} products in shopping cart</h6>
      <br />
      <span className="total-price"> total price: ${Math.round(allPrice)}</span>
      <br />
      <button className="cart-reset" onClick={() => setCart(!cart)}>
        Clean Cart
      </button>
    </div>
  );
}

export default Cart;
