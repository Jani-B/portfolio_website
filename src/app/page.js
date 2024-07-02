import NavBar from "./navbar/navbar.js";
import Header from "./header/header.js";
import styles from "./page.module.css";
<link href="https://fonts.googleapis.com/css?family=Roboto:300,400,600,700" rel="stylesheet"></link>



export default function Home() {
  return (
    <>
    <nav>
      <NavBar />
    </nav>
    <header>
      <Header />
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
