import styles from "./navbar.module.css";
import Link from 'next/link';

export default function NavBar() {
    return (
      <>
        <div className={styles.main}>
        <div className={styles.logo}>
            <p>Bergholm Portfolio</p>
        </div>
        <div className={styles.nav}>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/projects">Projects</Link></li>
            <li>About</li>
          </ul>
        </div>
        </div>
      </>
    );
  }