import styles from "./page.module.css";
import NavBar from "../navbar/navbar.js";
import { ProjectsPageCards } from "../cards/cards";

export default function Projects() {
  return (
    <>
      <nav>
        <NavBar />
      </nav>
      <div>
        <h1 className={styles.projectsh1}>My Projects</h1>
        <ProjectsPageCards />
      </div>
    </>
  );
}
