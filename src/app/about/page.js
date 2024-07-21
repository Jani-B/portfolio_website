import styles from "./page.module.css";
import Image from 'next/image';
import NavBar from "../navbar/navbar.js";



export default function Projects() {
    return (
      <>
        <nav>
          <NavBar />
        </nav>

        <div className={styles.about}>
          <h1>About me</h1>

          <div className={styles.aboutMe}>
            <p>
              Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                
            </p>

          </div>
        </div>
      </>
    );
  }