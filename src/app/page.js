import NavBar from "./navbar/navbar.js";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
    <nav>
      <NavBar />
    </nav>
    <header>
    <p>Header</p>
    </header>
    <main className={styles.main}>
    <p>Main Content</p>
    </main>
    <footer>
      <p>Footer area</p>
    </footer>
    </>
  );
}
