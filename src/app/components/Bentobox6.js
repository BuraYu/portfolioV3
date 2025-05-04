import { motion } from "framer-motion";
import Modal from "./Modal";

export default function Bentobox6() {
  return (
    <>
      <motion.div
        className="div6 bento-box"
        animate={{
          y: 0,
          opacity: 1,
          transition: { duration: 1, ease: "easeOut" },
        }}
        initial={{ y: "150vh", opacity: 0 }}
      >
        <h2 className="bento-header">current project.</h2>
        <Modal />
      </motion.div>
    </>
  );
}
