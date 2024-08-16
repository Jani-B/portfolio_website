import { cardInfo } from "../cardinfo/cardinfo";
import styles from "./cards.module.css";
import Image from "next/image";
import Link from "next/link";

let loading = true;
let frontpage = [];

for (let i = 0; i < cardInfo.length; i++) {
  if (cardInfo[i].frontpage === true) {
    frontpage.push(cardInfo[i]);
  }
}

const cardData = (data) => {
  return (
    <>
      <div className={styles.projects}>
        {data.map((info) => (
          <div
            key={`front${info.cardId}`}
            className={styles.project}
            id={`id${info.cardId}`}
          >
            <h3>{info.cardHeader}</h3>
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
              {info.haswebsite ? (
                <Link
                  className={styles.projectLink}
                  href={info.webpage}
                  target="_blank"
                >
                  Live page
                </Link>
              ) : (
                <></>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export const ProjectsPageCards = () => {
  return cardData(cardInfo);
};

export const FrontPageCards = () => {
  return cardData(frontpage);
};

export const Cards = () => {
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
          {frontpage.map((info) => (
            <div
              key={`front${info.cardId}`}
              className={styles.project}
              id={`id${info.cardId}`}
            >
              <h3>{info.cardHeader}</h3>
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
                {info.haswebsite ? (
                  <Link
                    className={styles.projectLink}
                    href={info.webpage}
                    target="_blank"
                  >
                    Live page
                  </Link>
                ) : (
                  <p></p>
                )}
              </div>
            </div>
          ))}
        </div>
      </>
    );
  }
};
