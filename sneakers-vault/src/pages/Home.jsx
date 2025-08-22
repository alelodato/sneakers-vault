import styles from "./Home.module.css";
import ProductRotator from "../components/ProductRotator";
import { products } from "../data/products";

export default function Home() {
  return (
    <>
      <div className={styles.homeintro}>
        <div className={styles.homecover}>
          <div>
            <h2 className={styles.hometitle}>
              Open the vault.
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
          <ProductRotator products={products} />
        </div>
      </div>
    </>
  );
}
