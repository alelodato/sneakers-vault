import { FaBars, FaSearch, FaHeart, FaShoppingBag } from "react-icons/fa";
import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <header className={styles.header}>
            {/* Left: Menu + Search */}
            <div className={styles.left}>
                <FaBars size={22} className={styles.icon} />
                <FaSearch size={22} className={styles.icon} />
            </div>

            {/* Center: Logo */}
            <Link className={styles.link} to="/">
            <h1 className={styles.logo}>Sneakers Vault</h1>
            </Link>
            {/* Right: Favourites + Cart */}
            <div className={styles.right}>
                <FaHeart size={22} className={styles.icon} />
                <FaShoppingBag size={22} className={styles.icon} />
            </div>
            </header>
    );
}