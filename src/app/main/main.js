import styles from "./main.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Main() {
  return (
    <>
      <div className={styles.projects}>
        <h2>My Main Projects</h2>
        <div className={styles.project}>
          <h3>Four Cards Preview</h3>
          <Link href="https://www.janibergholm.com/" target="_blank">
            <Image
              className={styles.image}
              src="/images/four_cards.jpg"
              width="500"
              height="500"
              alt="project image"
            />
          </Link>
          <ul className={styles.codelanguages}>
            <li>CSS</li>
            <li>HTML</li>
            <li>Javascript</li>
            <li>NEXT.js</li>
          </ul>
          <p>
            Very simple one page layout with 4 cards in it. The challenge here
            was to get everything working with CSS Grid and I wanted to use
            Next.js to further learn the basic structure. I also used mapping
            for Card object file to map trough it and get headers text and
            pictures to the cards this way.
            <br />
            <br />
            This project as it was simple helped me to take what I have learned
            from React to Next.js Next time I will further take what I know in
            React to Next.js
          </p>
          <div className={styles.linkContainer}>
            <Link
              className={styles.projectLink}
              href="https://github.com/Jani-B/FEM-four-card-feature-nextjs"
              target="_blank"
            >
              Github
            </Link>
            <Link
              className={styles.projectLink}
              href="https://janifourdcards.netlify.app/"
              target="_blank"
            >
              Netlify
            </Link>
          </div>
        </div>
        <div className={styles.project}>
          <h3>My Portfolio Homepage</h3>
          <Link href="https://www.janibergholm.com/" target="_blank">
            <Image
              className={styles.image}
              src="/images/homepage.jpg"
              width="500"
              height="500"
              alt="project image"
            />
          </Link>
          <ul className={styles.codelanguages}>
            <li>CSS</li>
            <li>HTML</li>
            <li>Javascript</li>
            <li>NEXT.js</li>
          </ul>
          <p>
            This project was interesting. It was my first time working with
            Next.js It took some time to learn all the Link, Client side etc
            rules. This site is not the most complicated I have been working
            with. Challenge was that this was my first touch to Next.js as
            before I have been working with React.
            <br />
            <br />
            There was some problems with the hamburger menu button on mobile
            view but I got it sorted out in the end. Next.js will be something I
            will be working with in the future also.
            <br />
            <br />
          </p>
          <div className={styles.linkContainer}>
            <Link
              className={styles.projectLink}
              href="https://github.com/Jani-B/portfolio_website"
              target="_blank"
            >
              Github
            </Link>
          </div>
        </div>
        <div className={styles.project}>
          <h3>Rock - Paper - Scissors Game</h3>
          <Link href="https://handsgame.netlify.app/" target="_blank">
            <Image
              className={styles.image}
              src="/images/rockpaper.jpg"
              width="500"
              height="500"
              alt="project image"
            />
          </Link>
          <ul className={styles.codelanguages}>
            <li>CSS</li>
            <li>HTML</li>
            <li>Javascript</li>
            <li>React</li>
          </ul>
          <p>
            This project was just small game of rock paper scissors. In the game
            you can choose which "weapon" you use and then you will see which
            one your opponent chose. The game will also calculate wins.
            <br />
            <br />
            Project was done mobile first with React. The buttons on mobile
            version are in the bottom of the screen after the first choise. It
            should be easier to use that way.
            <br />
            <br />
          </p>
          <div className={styles.linkContainer}>
            <Link
              className={styles.projectLink}
              href="https://github.com/Jani-B/rock-paper-game"
              target="_blank"
            >
              Github
            </Link>
            <Link
              className={styles.projectLink}
              href="https://handsgame.netlify.app/"
              target="_blank"
            >
              Live in Netlify
            </Link>
          </div>
        </div>
        <div className={styles.project}>
          <h3>Mortgage calculator</h3>
          <Link
            href="https://jani-b.github.io/mortage_calculator/"
            target="_blank"
          >
            <Image
              className={styles.image}
              src="/images/mortgage_calculator.jpg"
              width="500"
              height="500"
              alt="project image"
            />
          </Link>
          <ul className={styles.codelanguages}>
            <li>CSS</li>
            <li>HTML</li>
            <li>Javascript</li>
          </ul>
          <p>
            On this project you can calculate monthly payments with the total
            loan, payment term in years and interest. Project was done using
            HTML, CSS and Javascript. Tried to keep semantic HTML. Color of the
            input field will change on focus and the result field will change in
            different situations. Javascript was used to create different
            results if for example not everything has been chosen correctly. If
            everything in calculator has been marked correctly then it will
            calculate with the given information. Created as a mobile first and
            when screen size is bigger then the layout will change to work
            better on the computer screens.
          </p>
          <div className={styles.linkContainer}>
            <Link
              className={styles.projectLink}
              href="https://github.com/Jani-B/mortage_calculator"
              target="_blank"
            >
              Github
            </Link>
            <Link
              className={styles.projectLink}
              href="https://jani-b.github.io/mortage_calculator/"
              target="_blank"
            >
              Github Pages
            </Link>
          </div>
        </div>
        <div className={styles.project}>
          <h3>Recipe page</h3>
          <Link
            href="https://jani-b.github.io/FEM-recipe-page-main/"
            target="_blank"
          >
            <Image
              className={styles.image}
              src="/images/recipe-page.jpg"
              width="500"
              height="500"
              alt="project image"
            />{" "}
          </Link>
          <ul className={styles.codelanguages}>
            <li>CSS</li>
            <li>HTML</li>
          </ul>
          <p>
            On this project I created a simple recipe page which has different
            semantic sections. Project was more of a CSS training than not. It
            is responsive and created as a mobile first approach. It is part of
            FrontEnd Mentor challenges.
          </p>
          <div className={styles.linkContainer}>
            <Link
              className={styles.projectLink}
              href="https://github.com/Jani-B/FEM-recipe-page-main"
              target="_blank"
            >
              Github
            </Link>
            <Link
              className={styles.projectLink}
              href="https://jani-b.github.io/FEM-recipe-page-main/"
              target="_blank"
            >
              Github Pages
            </Link>
          </div>
        </div>
        <div className={styles.project}>
          <h3>Social Links Card</h3>
          <Link
            href="https://jani-b.github.io/FEM-social-links-profile/"
            target="_blank"
          >
            <Image
              className={styles.image}
              src="/images/social_media_card.jpg"
              width="500"
              height="500"
              alt="project image"
            />{" "}
          </Link>
          <ul className={styles.codelanguages}>
            <li>CSS</li>
            <li>HTML</li>
          </ul>
          <p>
            This was once more one of the Frontend Mentor challenge projects for
            CSS. Very simple project but was more to remind how different CSS
            styles work. Also good small project to keep in mind updating to
            Github.
          </p>
          <div className={styles.linkContainer}>
            <Link
              className={styles.projectLink}
              href="https://github.com/Jani-B/FEM-social-links-profile"
              target="_blank"
            >
              Github
            </Link>
            <Link
              className={styles.projectLink}
              href="https://jani-b.github.io/FEM-social-links-profile/"
              target="_blank"
            >
              Github Pages
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
