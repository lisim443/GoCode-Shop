import "./App.css";
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import ProductDetails from "./pages/ProductDetails";

function App() {
  return (
    <div>
      <Link to="/" className="navigation-link">
        Home
      </Link>
      <Link to="/about" className="navigation-link">
        About
      </Link>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products/:id" element={<ProductDetails />} />
      </Routes>
    </div>
  );
}

export default App;
