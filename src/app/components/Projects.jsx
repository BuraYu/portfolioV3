import styles from "@/app/styles/projects.module.css";
import logo from "../../../public/images/logo.png";
import Image from "next/image";

export default function Projects() {
  return (
    <>
      <div className={styles.projectContainer}>
        <nav className={styles.navbarContainer}>
          <Image src={logo} alt="logo of burak" width={200} height={120} />
          <div className={styles.buttonContainer}>
            <a href="#projectOne" style={{ backgroundColor: "var(--purple)" }}>
              Project1
            </a>
            <a href="#projectTwo" style={{ backgroundColor: "var(--yellow)" }}>
              Project2
            </a>
            <a href="#projectThree" style={{ backgroundColor: "var(--green)" }}>
              Project3
            </a>
            <a href="#projectFour" style={{ backgroundColor: "var(--blue)" }}>
              Project4
            </a>
          </div>
        </nav>
        <div className={styles.heroContainer}>
          <h1 className={styles.title}>
            {" "}
            The Projects<span className={styles.blinkingCursor}>.</span>
          </h1>
          <p className={styles.subTitle}>
            Here you can find some projects I worked on.
          </p>
        </div>
      </div>
      <div className={styles.projectOne} id="projectOne"></div>
      <div className={styles.projectTwo} id="projectTwo"></div>
      <div className={styles.projectThree} id="projectThree"></div>
      <div className={styles.projectFour} id="projectFour"></div>
    </>
  );
}
