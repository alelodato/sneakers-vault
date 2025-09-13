import React from 'react';
import ReactDOM from 'react-dom/client';
import './i18n/i18n';
import { BrowserRouter } from 'react-router-dom';
import CartProvider  from "./contexts/CartContext.jsx";
import WishlistProvider from "./contexts/WishListContext.jsx";
import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <WishlistProvider>
        <CartProvider>
      <App />
      </CartProvider>
      </WishlistProvider>
    </BrowserRouter>
  </React.StrictMode>
);

