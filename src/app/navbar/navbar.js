"use client";

import styles from "./navbar.module.css";
import Link from "next/link";
import { useState } from "react";

export default function NavBar() {
  const [menu, setMenu] = useState(styles.nav);

  const menuChange = () => {
    if (menu === styles.nav) {
      setMenu(styles.navResponsive);
    } else {
      setMenu(styles.nav);
    }
  };

  return (
    <>
      <div className={styles.main}>
        <div className={styles.logo}>
          <p>Bergholm Portfolio</p>
        </div>
        <div className={menu} id={styles.myLinks}>
          <ul>
            <li className={styles.normal}>
              <Link href="/">Home</Link>
            </li>
            <li className={styles.normal}>
              <Link href="/projects">Projects</Link>
            </li>
            <li className={styles.normal}>
              <Link href="/about">About</Link>
            </li>
            <li className={styles.icon}>
              <Link href="javascript:void(0);" onClick={() => menuChange()}>
                ☰
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
