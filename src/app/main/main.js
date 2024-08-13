import styles from "./main.module.css";
import Image from "next/image";
import Link from "next/link";
import { cardInfo } from "../cardinfo/cardinfo";

export default function Main() {
  let loading = true;
  let frontpage = [];
  for (let i = 0; i < cardInfo.length; i++) {
    if (cardInfo[i].frontpage === true) {
      frontpage.push(cardInfo[i]);
    }
  }
  loading = false;

  if (!loading) {
    return (
      <>
        <div className={styles.projects}>
          <h2>My Main Projects</h2>
          {frontpage.map((info) => (
            <div key={`front${info.cardId}`} className={styles.project}>
              <h3>{info.cardHeader}</h3>
              <Link href={info.webpage} target="_blank">
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
                  <li key={`Frontli${info.cardId}${i}`}>{language}</li>
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
  } else {
    return (
      <div className={styles.loading}>
        <h1>Loading...</h1>
      </div>
    );
  }
}
