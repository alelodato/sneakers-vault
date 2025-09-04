import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <header className={styles.header}>
            {/* Left: Menu + Search */}
            <div className={styles.left}>
                <Link className={styles.link} to="/shop">
                <i class="fa-solid fa-shop"></i>
                </Link>
                <i class="fa-solid fa-magnifying-glass"></i>
            </div>

            {/* Center: Logo */}
            <Link className={styles.link} to="/">
            <h1 className={styles.logo}>Sneakers Vault</h1>
            </Link>
            {/* Right: Favourites + Cart */}
            <div className={styles.right}>
                <Link className={styles.link} to="/wish">
                <i class="fa-regular fa-heart"></i>
                </Link>
                <Link className={styles.link} to="/cart">
                <i class="fa-solid fa-cart-shopping"></i>
                </Link>
            </div>
            </header>
    );
}