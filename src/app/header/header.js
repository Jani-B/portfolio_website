import styles from "./header.module.css";
import Image from "next/image";
import Link from "next/link";

export default async function Header() {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.headerDiv}>
          <h1 className={styles.firstHeader}>Hi, I am</h1>
          <h1 className={styles.firstH}>Jani Bergholm</h1>
          <h2>Front end developer</h2>
        </div>
        <div className={styles.pictureDiv}>
          <Image
            className={styles.image}
            src="/images/working2.png"
            width="1000"
            height="1000"
            alt="code image"
          />
        </div>
        <div className={styles.additionalInfo}>
          <p>
            Are you looking for a motivated, certified and skilled junior front
            end developer to help with your projects?
          </p>
        </div>
        <div>
          <Link className={styles.contactButtonContainer} href="/about">
            <button className={styles.contactButton}>About me</button>
          </Link>
        </div>
      </div>
    </>
  );
}
