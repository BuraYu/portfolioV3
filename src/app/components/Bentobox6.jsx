import { motion } from "framer-motion";
import Modal from "./Modal";

export default function Bentobox6() {
  const style = {
    background:
      "linear-gradient(90deg, rgba(34, 193, 195, 1) 0%, rgba(253, 187, 45, 1) 100%)",
  };
  return (
    <>
      <motion.div
        className="div6 bento-box"
        style={style}
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
