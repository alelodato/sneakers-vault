import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Checkout from "./pages/Checkout";
import MenProducts from "./pages/MenProducts";
import WomenProducts from "./pages/WomenProducts";
import KidsProducts from "./pages/KidsProducts";
import OnSale from "./pages/OnSale";
import Trending from "./pages/Trending";
import NewArrivals from "./pages/NewArrivals";
import Cart from "./pages/Cart";
import Wishlist from "./pages/WishList";
import './App.css'
import ProductPage from "./pages/ProductPage";


export default function App() {
  return (
    <>
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/wish" element={<Wishlist />} />
      <Route path="/men" element={<MenProducts />} />
      <Route path="/women" element={<WomenProducts />} />
      <Route path="/kids" element={<KidsProducts />} />
      <Route path="/trend" element={<Trending />} />
      <Route path="/sale" element={<OnSale />} />
      <Route path="/new" element={<NewArrivals />} />
      <Route path="/product/:slug" element={<ProductPage />} />
      <Route path="/checkout" element={<Checkout />} />
    </Routes>
    </>
  );
}
