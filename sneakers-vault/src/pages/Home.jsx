import styles from "./Home.module.css";
import ProductRotator from "../components/ProductRotator";
import { products } from "../data/products";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className={styles.homeintro}>
        <div className={styles.homecover}>
          <div>
            <h2 className={styles.hometitle}>
              Unlock the vault.
              <br />
              Step into style.
            </h2>
          </div>
          <div className={styles.homebuttons}>
            <button>MEN</button>
            <button>WOMEN</button>
            <button>KIDS</button>
          </div>
          {/* Rotatore con 3 prodotti */}
          <h3 className={styles.hot}>🔥HOTTEST ON THE MARKET🔥</h3>
          <ProductRotator products={products} />
          <p className={styles.more}>SEE MORE <i class="fa-regular fa-circle-right"></i></p>
          <h3 className={styles.sale}>ITEMS ON SALE (UP TO 70%)</h3>
          <ProductRotator products={products} />
          <p className={styles.more}>SEE MORE <i class="fa-regular fa-circle-right"></i></p>
          <h3 className={styles.sale}>NEW ARRIVALS</h3>
          <ProductRotator products={products} />
          <p className={styles.more}>SEE MORE <i class="fa-regular fa-circle-right"></i></p>
          <h4 className={styles.newsletter}>Sign Up to our newsletter <i class="fa-solid fa-angle-down"></i></h4>
          <h4 className={styles.contact}><Link className={styles.link} to={'Contact'}>Contact Us</Link></h4>
          <h4 className={styles.lang}>English <i class="fa-solid fa-angle-down"></i></h4>
        </div>
      </div>
    </>
  );
}
