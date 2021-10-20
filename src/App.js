import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";

function App() {
  return (
    <div className="App">
      <div className="Header">
        <Header />
      </div>
      <div className="Products">
        <Products />
      </div>
    </div>
  );
}

export default App;
