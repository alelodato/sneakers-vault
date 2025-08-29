import { FaBars, FaSearch, FaHeart, FaShoppingBag } from "react-icons/fa";
import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <header className={styles.header}>
            {/* Left: Menu + Search */}
            <div className={styles.left}>
                <i class="fa-solid fa-bars"></i>
                <i class="fa-solid fa-magnifying-glass"></i>
            </div>

            {/* Center: Logo */}
            <Link className={styles.link} to="/">
            <h1 className={styles.logo}>Sneakers Vault</h1>
            </Link>
            {/* Right: Favourites + Cart */}
            <div className={styles.right}>
                <i class="fa-regular fa-heart"></i>
                <i class="fa-solid fa-cart-shopping"></i>
            </div>
            </header>
    );
}