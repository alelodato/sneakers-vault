import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Contact from "./pages/Contact.jsx";
import Shop from "./pages/Shop";
import Checkout from "./pages/Checkout.jsx";
import OnSale from "./pages/OnSale";
import Trending from "./pages/Trending";
import NewArrivals from "./pages/NewArrivals";
import Cart from "./pages/Cart";
import Wishlist from "./pages/WishList";
import Success from "./pages/Success";
import Cancel from "./pages/Cancel";
import ProductPage from "./pages/ProductPage";
import "./App.css";


export default function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wish" element={<Wishlist />} />
        <Route path="/trend" element={<Trending />} />
        <Route path="/sale" element={<OnSale />} />
        <Route path="/new" element={<NewArrivals />} />
        <Route path="/product/:slug" element={<ProductPage />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/success" element={<Success />} />
        <Route path="/cancel" element={<Cancel />} />
      </Routes>
    </>
  );
}
