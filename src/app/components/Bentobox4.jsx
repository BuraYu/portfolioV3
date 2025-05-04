import { motion } from "framer-motion";
import Image from "next/image";

import reactIcon from "../../../public/react-svgrepo-com.svg";
import javascriptIcon from "../../../public/javascript-svgrepo-com.svg";
import typescriptIcon from "../../../public/typescript-svgrepo-com.svg";
import nodeIcon from "../../../public/node-16-svgrepo-com.svg";
import sassIcon from "../../../public/sass-svgrepo-com.svg";
import mongoIcon from "../../../public/mongodb-svgrepo-com.svg";
import nextJsIcon from "../../../public/nextjs-fill-svgrepo-com.svg";

export default function Bentobox4() {
  return (
    <>
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
            <Image
              src={javascriptIcon}
              alt="react icon"
              width={100}
              height={60}
            />
            <p>JavaScript</p>
          </div>
          <div className="icon-container">
            <Image
              src={typescriptIcon}
              alt="react icon"
              width={100}
              height={60}
            />
            <p>Typescript</p>
          </div>
          <div className="icon-container">
            <Image src={nextJsIcon} alt="react icon" width={100} height={60} />
            <p>NextJS</p>
          </div>
          <div className="icon-container">
            <Image src={mongoIcon} alt="react icon" width={100} height={60} />
            <p>MongoDB</p>
          </div>
          <div className="icon-container">
            <Image src={sassIcon} alt="react icon" width={100} height={60} />
            <p>Sass/SCSS</p>
          </div>
          <div className="icon-container">
            <Image src={nodeIcon} alt="react icon" width={100} height={60} />
            <p>NodeJS</p>
          </div>
        </div>
      </motion.div>
    </>
  );
}
