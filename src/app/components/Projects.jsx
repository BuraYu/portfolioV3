// ON HOLD

"use client";

import { useState } from "react";
import styles from "@/app/styles/projects.module.css";
import logo from "../../../public/images/logo.png";
import Image from "next/image";

export default function Projects() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className={styles.projectContainer}>
        <nav className={styles.navbarContainer}>
          <Image src={logo} alt="logo of burak" width={200} height={120} />

          <div className={styles.desktopMenu}>
            <a href="#projectOne" style={{ backgroundColor: "var(--purple)" }}>
              Project 1
            </a>
            <a href="#projectTwo" style={{ backgroundColor: "var(--yellow)" }}>
              Project 2
            </a>
            <a href="#projectThree" style={{ backgroundColor: "var(--green)" }}>
              Project 3
            </a>
            <a href="#projectFour" style={{ backgroundColor: "var(--blue)" }}>
              Project 4
            </a>
          </div>

          <div
            className={`${styles.hamburger} ${menuOpen ? styles.open : ""}`}
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </nav>

        <div className={styles.heroContainer}>
          <h1 className={styles.title}>
            The Projects<span className={styles.blinkingCursor}>.</span>
          </h1>
          <p className={styles.subTitle}>
            Here you can find some projects I worked on.
          </p>
        </div>
      </div>

      {/* Fullscreen Menu */}
      {menuOpen && (
        <div className={styles.fullscreenMenu}>
          <button className={styles.closeButton} onClick={toggleMenu}>
            &times;
          </button>
          <div className={styles.menuList}>
            <a
              href="#projectOne"
              onClick={toggleMenu}
              style={{ backgroundColor: "var(--purple)" }}
            >
              Project 1
            </a>

            <a
              href="#projectTwo"
              onClick={toggleMenu}
              style={{ backgroundColor: "var(--yellow)" }}
            >
              Project 2
            </a>

            <a
              href="#projectThree"
              onClick={toggleMenu}
              style={{ backgroundColor: "var(--green)" }}
            >
              Project 3
            </a>

            <a
              href="#projectFour"
              onClick={toggleMenu}
              style={{ backgroundColor: "var(--blue)" }}
            >
              Project 4
            </a>
          </div>
        </div>
      )}

      <div className={styles.projectOne} id="projectOne"></div>
      <div className={styles.projectTwo} id="projectTwo"></div>
      <div className={styles.projectThree} id="projectThree"></div>
      <div className={styles.projectFour} id="projectFour"></div>
    </>
  );
}
