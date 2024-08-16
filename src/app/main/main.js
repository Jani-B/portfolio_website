import styles from "./main.module.css";
import { FrontPageCards } from "../cards/cards";

export default function Main() {
  return (
    <>
      <h2 className={styles.mainProjects}>My Main Projects</h2>
      <FrontPageCards />
    </>
  );
}
