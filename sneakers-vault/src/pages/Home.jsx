import styles from "./Home.module.css";
import ProductRotator from "../components/ProductRotator";
import { products } from "../data/products";
import { Link } from "react-router-dom";

export default function Home() {

  const hot = products.filter(p => p.tags?.includes("hot"));
  const onSale = products.filter(p => p.tags?.includes("sale"));
  const newArrivals = products.filter(p => p.tags?.includes("new"));


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
            <Link to="/men">
            <button>MEN</button>
            </Link>
            <Link to="/women">
            <button>WOMEN</button>
            </Link>
            <Link to="/kids">
            <button>KIDS</button>
            </Link>
          </div>
          {/* Rotatore con 3 prodotti */}
          <h3 className={styles.hot}>🔥HOTTEST ON THE MARKET🔥</h3>
          <ProductRotator products={hot} />
          <p className={styles.more}>SEE MORE <i class="fa-regular fa-circle-right"></i></p>
          <h3 className={styles.sale}>ITEMS ON SALE (UP TO 70%)</h3>
          <ProductRotator products={onSale} />
          <p className={styles.more}>SEE MORE <i class="fa-regular fa-circle-right"></i></p>
          <h3 className={styles.sale}>NEW ARRIVALS</h3>
          <ProductRotator products={newArrivals} />
          <p className={styles.more}>SEE MORE <i class="fa-regular fa-circle-right"></i></p>
          <h4 className={styles.newsletter}>Sign Up To Our Newsletter <i class="fa-solid fa-angle-down"></i></h4>
          <h4 className={styles.contact}><Link className={styles.link} to={'Contact'}>Contact Us</Link></h4>
          <h4 className={styles.lang}>English <i class="fa-solid fa-angle-down"></i></h4>
        </div>
      </div>
    </>
  );
}
