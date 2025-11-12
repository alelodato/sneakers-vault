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
import Footer from "./components/Footer.jsx";
import ProductPage from "./pages/ProductPage";
import NotFound from "./pages/NotFound";
import CookieBanner from "./components/CookieBanner.jsx";
import CookiePreferences from "./components/CookiePreferences.jsx";
import CookiePolicy from "./pages/CookiePolicy.jsx";
import FAQResi from "./pages/FAQResi.jsx";
import Privacy from "./pages/Privacy.jsx";
import Termini from "./pages/Termini.jsx";
import TracciaOrdine from "./pages/TracciaOrdine.jsx";
import "./App.css";


export default function App() {
  return (
    <>
      <NavBar />
      <Routes>
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
        <Route path="*" element={<NotFound />} />
        <Route path="/faq-resi" element={<FAQResi />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/termini" element={<Termini />} />
        <Route path="/traccia-ordine" element={<TracciaOrdine />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />
        <Route path="/cookie-preferences" element={<CookiePreferences />} />
        <Route path="/cookie-banner" element={<CookieBanner />} />
      </Routes>
      <Footer />
    </>
  );
}
