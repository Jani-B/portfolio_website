import styles from "./navbar.module.css";

export default function NavBar() {
    return (
      <>
        <div className={styles.main}>
        <div className={styles.logo}>
            <p>Bergholm Portfolio</p>
        </div>
        <div className={styles.nav}>
        <p>testing</p>
        </div>
        </div>
      </>
    );
  }