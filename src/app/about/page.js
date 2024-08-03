import styles from "./page.module.css";
import Image from "next/image";
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
            I am self taught front end engineer and I love to code on my
            freetime. I enjoy new challenges and love to find different
            approaches to problems. Coding has been my hoppy for some time and
            decided to take it to the next level by taking multible courses on
            CSS, Javascript and React. I do like to find new small challenges to
            keep my knowledge updated. One of the best places I like to
            challenge my skills is Frontend mentor site, where there is good
            projects to challenge the skills I have.
          </p>
        </div>
        <div className={styles.skills}>
          <h2>Skills</h2>

          <ul className={styles.skillsList}>
            <li>HTML</li>
            <li>CSS</li>
            <li>Javascript</li>
            <li>React</li>
            <li>Python</li>
            <li>Node js</li>
          </ul>

          <h2>Courses</h2>
          <p>
            Front End - Engineer : CodeCademy <br />
            <br />
            <Image
              className={styles.image}
              src="/images/front-end-sertificate.jpg"
              width="1000"
              height="1000"
              alt="code image"
            />
            <br />
            <br />
          </p>
        </div>
      </div>
    </>
  );
}
