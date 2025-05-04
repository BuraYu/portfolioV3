import { motion } from "framer-motion";
import { SocialIcon } from "react-social-icons";

export default function Bentobox3() {
  return (
    <>
      <motion.div
        className="div3 bento-box"
        animate={{
          x: 0,
          opacity: 1,
          transition: { duration: 1, ease: "easeOut" },
        }}
        initial={{ x: "150vh", opacity: 0 }}
      >
        <h2 className="bento-header">socials.</h2>
        <div className="social-links-container">
          <SocialIcon
            className="custom-class"
            url="http://www.github.com/burayu"
          />
          <SocialIcon url="https://www.linkedin.com/in/buraky%C3%BCksel-/" />
          <SocialIcon url="http://www.xing.de/burayu" />
          <SocialIcon url="mailto:burak.yueksel@hotmail.com" />
        </div>
      </motion.div>
    </>
  );
}
