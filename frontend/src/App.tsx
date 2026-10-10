import React from 'react';
import logo from './logo.svg';
import Home from './Home/Home';
import Products from './Products/Products';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Orders from "./Orders/Orders";
import OrderDetail from "./Orders/OrderDetail";
import PaymentScreen from './Payment/Payment';
import Fulfillment from './Fulfillment/Fulfillment'
//import './App.css';

function App() {
  const openMenu = () => {
    document.querySelector(".sidebar")?.classList.add("open");
  }
  const closeMenu = () => {
    document.querySelector(".sidebar")?.classList.remove("open");
  }
  return (
    <div className = "grid-container">
        <header className = "header">
            <div className = "brand">
                <button onClick={openMenu}>&#9776;</button>
                <a href="/">Team 6 ACCTMIS 4630</a>
            </div>
            <div className = "header-links">
                <a href = "cart.html">Cart</a>
                <a href = "signin.html">Sign In</a>
                <a href = "/payment">Payment</a>
            </div>
        </header>

        <main className = "main">
            <aside className = "sidebar">
                <h3>Shopping Categories</h3>
                <button className = "sidebar-close-button" onClick = {closeMenu}>
                  x
                </button>
                <li>
    <a href="/products">Pants</a>
</li>
<li>
    <a href="/products">Shirts</a>
</li>
<li>
    <a href="/orders">Orders</a>
</li>
<li>
  <a href = "/fulfillment">Fulfillment</a>
</li>
            </aside>

  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/products" element={<Products />} />
    <Route path="/orders" element={<Orders />} />
    <Route path="/fulfillment" element = {<Fulfillment />}/>
    <Route path="/orders/:id" element={<OrderDetail />} />
    <Route path = "/payment" element= {<PaymentScreen />} />
  </Routes>
        </main>
        <footer className = "footer">
            &copy; 2022 Team 6 ACCTMIS 4630 
        </footer>
    </div> 
  );
}

export default function AppWithRouter() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

