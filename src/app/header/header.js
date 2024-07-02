import styles from "./header.module.css";
import Image from 'next/image';

export default function Header() {
    return (
      <>
        <div className={styles.header}>
            <div className={styles.headerDiv}>
                <h1 className={styles.firstH}>Jani</h1>
                <h1 className={styles.secondH}>Bergholm</h1>
                <h2>Portfolio Website</h2>
            </div>
            <div className={styles.pictureDiv}>
          <Image className={styles.image} src="/images/etusivukuva.jpg" width="1000" height="1000"/>
            </div>
        </div>
        
      </>
    );
  }