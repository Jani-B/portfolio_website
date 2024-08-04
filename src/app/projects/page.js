import styles from "./page.module.css";
import Image from "next/image";
import NavBar from "../navbar/navbar.js";
import Link from "next/link";
import { cardInfo } from "../cardinfo/cardinfo";

export default function About() {
  return (
    <>
      <nav>
        <NavBar />
      </nav>

      <div className={styles.projects}>
        <h1 className={styles.h1}>My Projects</h1>

        {cardInfo.map((info) => (
          <div className={styles.myProject} key={info.cardId}>
            <h3 className={styles.test}>{info.cardHeader}</h3>
            <Link href={info.webpage}>
              <Image
                className={styles.image}
                src={info.cardPicture}
                width="500"
                height="500"
                alt="project image"
              />
            </Link>
            <ul className={styles.codelanguages}>
              {info.stack.map((language, i) => (
                <li key={`list${info.cardId}${i}`}>{language}</li>
              ))}
            </ul>
            <p>{info.cardText}</p>
            <div className={styles.linkContainer}>
              <Link
                className={styles.projectLink}
                href={info.github}
                target="_blank"
              >
                Github
              </Link>
              <Link
                className={styles.projectLink}
                href={info.webpage}
                target="_blank"
              >
                Live page
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
