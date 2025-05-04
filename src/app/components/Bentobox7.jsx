import { motion } from "framer-motion";
import Cli from "./Cli";

export default function Bentobox7() {
  return (
    <>
      <motion.div
        className="div7 bento-box"
        animate={{
          y: 0,
          opacity: 1,
          transition: { duration: 1, ease: "easeOut" },
        }}
        initial={{ y: "150vh", opacity: 0 }}
      >
        <h2 className="bento-header">about me.</h2>
        <Cli />
      </motion.div>
    </>
  );
}
