import styles from "./main.module.css";
import Image from 'next/image';


export default function Main() {
    return (
      <>
        <div className={styles.projects}>
          <h2>My Main Projects</h2>

          <div className={styles.project}>
            <h3>Project nr.1</h3>
              <Image className={styles.image} src="/images/etusivukuva.jpg" width="500" height="500"/>
              <p>test for projects in main. There is a lot of text on this one. "Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." </p>
          </div>
          <div className={styles.project}>
            <h3>Project nr.2</h3>
              <Image className={styles.image} src="/images/etusivukuva.jpg" width="500" height="500"/>
              <p>test for projects in main</p>
          </div>
          <div className={styles.project}>
            <h3>Project nr.3</h3>
              <Image className={styles.image} src="/images/etusivukuva.jpg" width="500" height="500"/>
              <p>test for projects in main</p>
          </div>
          <div className={styles.project}>
            <h3>Project nr.3</h3>
              <Image className={styles.image} src="/images/etusivukuva.jpg" width="500" height="500"/>
              <p>test for projects in main</p>
          </div>
        </div>
        
      </>
    );
  }