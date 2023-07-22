import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ProductDetails from './ProductDetails';
import ProductListing from './ProductListing';
import App from './App';
import Checkout from './Checkout';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ProductListing />
  </React.StrictMode>
);

reportWebVitals();
