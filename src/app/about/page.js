import styles from "./page.module.css";
import Image from "next/image";
import NavBar from "../navbar/navbar.js";

export default function About() {
  return (
    <>
      <nav>
        <NavBar />
      </nav>

      <div className={styles.about}>
        <h1>About me</h1>

        <div className={styles.aboutMe}>
          <p>
            I am a self taught front end engineer and I love to code in my free
            time. I enjoy new challenges and love to find different approaches
            to problems. Coding has been my hobby for some time and I decided to
            take it to the next level by taking multiple courses on CSS,
            Javascript and React. I do like to find new small challenges to keep
            my knowledge updated. One of the best places I like to challenge my
            skills is the Frontend mentor site, where there are good projects to
            challenge the skills I have.
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
          <div className={styles.links}>
            <h2>Links</h2>
            <ul className={styles.skillsList}>
              <li>
                <a href="https://github.com/Jani-B" target="_blank">
                  <Image
                    className={styles.linkPictures}
                    src="/images/GitHub_Logo.png"
                    width="300"
                    height="300"
                    alt="github"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://www.frontendmentor.io/profile/Jani-B"
                  target="_blank"
                >
                  <Image
                    className={styles.linkPicturesMentor}
                    src="/images/Frontend_mentor_logo.png"
                    width="300"
                    height="300"
                    alt="github"
                  />
                </a>
              </li>
            </ul>
          </div>

          <h2>Courses</h2>
          <p>Front - End Engineer : CodeCademy</p>

          <Image
            className={styles.image}
            src="/images/front-end-sertificate.jpg"
            width="1000"
            height="1000"
            alt="code image"
          />
          <p>React - course : CodeCademy</p>
          <Image
            className={styles.image}
            src="/images/react-sertificate.jpg"
            width="1000"
            height="1000"
            alt="code image"
          />
          <br />
        </div>
      </div>
    </>
  );
}
