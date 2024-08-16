import { cardInfo } from "../cardinfo/cardinfo";

export default Cards = () => {
  let loading = true;
  let frontpage = [];
  for (let i = 0; i < cardInfo.length; i++) {
    if (cardInfo[i].frontpage === true) {
      frontpage.push(cardInfo[i]);
    }
  }
  loading = false;

  if (!loading) {
    frontpage.map((info) => {
      if (info.haswebsite === false) {
        return (
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
            </div>
          </div>
        );
      } else {
        return (
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
              <Link
                className={styles.projectLink}
                href={info.webpage}
                target="_blank"
              >
                Live page
              </Link>
            </div>
          </div>
        );
      }
    });
  }
};
