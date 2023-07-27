import React from "react";
// import CardHome from "./components/CardHome";
// import { MOCK_JSON } from "./utils/MockData";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./Home";
import Header from "./components/Header";
import Checkout from "./Checkout";
import ProductList from "./ProductList";
import ProductDetails from "./ProductDetails";
import ProductListing from "./ProductListing";
import Login from "./Login";
// import Advertisement from "./components/Advertisement";
// import { CartContext } from "./utils/CartContext";

function App() {
  // const {cartState, dispatch} = useContext(CartContext);
  // console.log(cartState.cartItems.length)
  return (
<Router>
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/login" element={<Login/>} />
    <Route path="/cart" element={<Checkout/>} />
    <Route path="/ProductList" element={<ProductList/>}/>
    <Route path="/ProductDetails" element={<ProductDetails/>}/>
    <Route path="/ProductListing" element={<ProductListing/>}/>
  </Routes>
</Router>
    );
}

export default App;
