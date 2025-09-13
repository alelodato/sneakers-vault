import styles from "./Home.module.css";
import ProductRotator from "../components/ProductRotator";
import { products } from "../data/products";
import { Link } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from "../components/LanguageSwitcher";

export default function Home() {
  const hot = products.filter((p) => p.tags?.includes("hot"));
  const onSale = products.filter((p) => p.tags?.includes("sale"));
  const newArrivals = products.filter((p) => p.tags?.includes("new"));
  const { t } = useTranslation();

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
            <Link to="/shop?tag=men">
              <button >{t('home.men')}</button>
            </Link>
            <Link to="/shop?tag=women">
              <button >{t('home.women')}</button>
            </Link>
            <Link to="/shop?tag=kids">
              <button >{t('home.kids')}</button>
            </Link>
          </div>
          {/* Rotatore con 3 prodotti */}
          <h3 className={styles.hot} >{t('home.trend')}</h3>
          <ProductRotator products={hot} />
          <Link className={styles.link} to="/trend">
            <p className={styles.more} >
              {t('home.more')} <i class="fa-regular fa-circle-right"></i>
            </p>
          </Link>
          <h3 className={styles.sale} >{t('home.sale')}</h3>
          <ProductRotator products={onSale} />
          <Link className={styles.link} to="/sale">
            <p className={styles.more} >
              {t('home.more')} <i class="fa-regular fa-circle-right"></i>
            </p>
          </Link>
          <h3 className={styles.sale} >{t('home.new')}</h3>
          <ProductRotator products={newArrivals} />
          <Link className={styles.link} to="/new">
            <p className={styles.more} >
              {t('home.more')} <i class="fa-regular fa-circle-right"></i>
            </p>
          </Link>
          <h4 className={styles.contact} >
            <Link className={styles.link} to={"Contact"}>
              {t('home.contact')}
            </Link>
          </h4>
          <h4 className={styles.lang} >
            {t('home.lang')}<LanguageSwitcher />
          </h4>
        </div>
      </div>
      <SearchBar />
    </>
  );
}
