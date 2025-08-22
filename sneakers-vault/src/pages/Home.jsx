import styles from "./Home.module.css";

export default function Home() {
    return (
    <>
    <div className={styles.homeintro}>
        <h2 className={styles.hometitle}>Open the vault.
            <br />Step into style.</h2>
    </div>
    <div className={styles.homebuttons}>
        <button>Men</button>
        <button>Women</button>
        <button>Kids</button>
    </div>
    </>
    );
}