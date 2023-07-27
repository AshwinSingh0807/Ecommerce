import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import ProductDetails from "./ProductDetails";
import ProductListing from "./ProductListing";
import ProductList from "./ProductList";
import App from "./App";
import Checkout from "./Checkout";
import reportWebVitals from "./reportWebVitals";
import { CartContextProvider } from "./utils/CartContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CartContextProvider>
      <App />
    </CartContextProvider>
  </React.StrictMode>
);

reportWebVitals();
