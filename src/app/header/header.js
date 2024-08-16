import styles from "./header.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
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
            src="/images/working.png"
            width="1000"
            height="1000"
            alt="code image"
          />
        </div>
        <div className={styles.additionalInfo}>
          <p>
            Are you looking for a motivated, certified and skilled junior front
            end developer to help with your prtojects?
          </p>
        </div>
        <Link className={styles.contactButtonContainer} href="/about">
          <button className={styles.contactButton}>About me</button>
        </Link>
      </div>
    </>
  );
}
