import styles from "./NavBar.module.css";
import { Link, useNavigate } from "react-router-dom";

export default function NavBar() {
    const navigate = useNavigate();

    const openSearch = () => {
        navigate({ pathname: "/", search: "?search=1" });
    };
    return (
        <header className={styles.header}>
            {/* Left: Menu + Search */}
            <div className={styles.left}>
                <Link className={styles.link} to="/shop">
                <i class="fa-solid fa-shop" aria-label="shop-icon"></i>
                </Link>
                <i class="fa-solid fa-magnifying-glass" aria-label="searcbar-icon"
                onClick={openSearch}>

                </i>
            </div>

            {/* Center: Logo */}
            <Link className={styles.link} to="/">
            <h1 className={styles.logo}>Sneakers Vault</h1>
            </Link>
            {/* Right: Favourites + Cart */}
            <div className={styles.right}>
                <Link className={styles.link} to="/wish">
                <i class="fa-regular fa-heart" aria-label="wishlist-icon"></i>
                </Link>
                <Link className={styles.link} to="/cart">
                <i class="fa-solid fa-cart-shopping" aria-label="cart-icon"></i>
                </Link>
            </div>
            </header>
    );
}