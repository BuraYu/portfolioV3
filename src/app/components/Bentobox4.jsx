import { motion } from "framer-motion";
import Image from "next/image";

import reactIcon from "../../../public/react-svgrepo-com.svg";
import javascriptIcon from "../../../public/javascript-svgrepo-com.svg";
import typescriptIcon from "../../../public/typescript-svgrepo-com.svg";
import nodeIcon from "../../../public/node-16-svgrepo-com.svg";
import sassIcon from "../../../public/sass-svgrepo-com.svg";
import mongoIcon from "../../../public/mongodb-svgrepo-com.svg";
import nextJsIcon from "../../../public/nextjs-fill-svgrepo-com.svg";

// Neue Icons für Tailwind, Material UI und Supabase (bitte SVGs im public-Ordner ablegen)
import tailwindIcon from "../../../public/tailwind-css-icon.svg";
import materialUiIcon from "../../../public/material-ui-icon.svg";
import supabaseIcon from "../../../public/supabase-icon.svg";

export default function Bentobox4() {
  return (
    <motion.div
      className="div4 bento-box"
      animate={{
        x: 0,
        opacity: 1,
        transition: { duration: 3, ease: "easeOut" },
      }}
      initial={{ x: "0", opacity: 0 }}
    >
      <h2 className="bento-header">techstack.</h2>

      <div className="icon-container-wrapper">
        <div className="icon-container">
          <Image src={reactIcon} alt="react icon" width={100} height={60} />
          <p>React</p>
        </div>
        <div className="icon-container">
          <Image src={javascriptIcon} alt="javascript icon" width={100} height={60} />
          <p>JavaScript</p>
        </div>
        <div className="icon-container">
          <Image src={typescriptIcon} alt="typescript icon" width={100} height={60} />
          <p>Typescript</p>
        </div>
        <div className="icon-container">
          <Image src={nextJsIcon} alt="nextjs icon" width={100} height={60} />
          <p>NextJS</p>
        </div>
        <div className="icon-container">
          <Image src={mongoIcon} alt="mongodb icon" width={100} height={60} />
          <p>MongoDB</p>
        </div>
        <div className="icon-container">
          <Image src={sassIcon} alt="sass icon" width={100} height={60} />
          <p>Sass/SCSS</p>
        </div>
        <div className="icon-container">
          <Image src={nodeIcon} alt="nodejs icon" width={100} height={60} />
          <p>NodeJS</p>
        </div>

        {/* Neue Skills */}
        <div className="icon-container">
          <Image src={tailwindIcon} alt="tailwind css icon" width={100} height={60} />
          <p>Tailwind CSS</p>
        </div>
        <div className="icon-container">
          <Image src={materialUiIcon} alt="material ui icon" width={100} height={60} />
          <p>Material UI</p>
        </div>
        <div className="icon-container">
          <Image src={supabaseIcon} alt="supabase icon" width={100} height={60} />
          <p>Supabase</p>
        </div>
      </div>
    </motion.div>
  );
}
