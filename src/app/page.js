import NavBar from "./navbar/navbar.js";
import Header from "./header/header.js";
import Main from "./main/main.js";
import Footer from "./footer/footer.js";
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
      <Main />
    </main>
    <footer>
      <Footer />
    </footer>
    </>
  );
}
