import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

import "./App.css";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Cart from "./pages/Cart";

function Home() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {

    try {

      const response = await axios.get("http://localhost:8002");

      setProducts(response.data.products);

    } catch (error) {

      console.log(error);

    }

  };

  return (

    <div>

      {/* Navbar */}
      <nav className="navbar">

        <div className="logo">
          KubeCart 🚀
        </div>

        <div className="nav-links">

          <Link to="/">
            <button>Home</button>
          </Link>

          <Link to="/cart">
            <button>Cart</button>
          </Link>

          <Link to="/login">
            <button>Login</button>
          </Link>

          <Link to="/signup">
            <button>Signup</button>
          </Link>

        </div>

      </nav>

      {/* Hero */}
      <div className="hero">

        <h1>Welcome To KubeCart</h1>

        <p>
          Modern DevOps Powered Ecommerce Platform 🚀
        </p>

      </div>

      {/* Products */}
      <div className="products-section">

        <h2 className="products-title">
          Featured Products
        </h2>

        <div className="products-grid">

          {products.map((product, index) => (

            <div className="product-card" key={index}>

              <div className="product-image">
                📱
              </div>

              <h3>{product.name}</h3>

              <p>{product.desc}</p>

              <div className="price-cart">

                <div className="price">
                  ${product.price}
                </div>

                <button className="cart-btn">
                  Add To Cart
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>

  );

}

function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/signup" element={<Signup />} />

        <Route path="/cart" element={<Cart />} />

      </Routes>

    </BrowserRouter>

  );

}

export default App;