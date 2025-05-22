import { motion } from "framer-motion";
import ModalPreview from "./modal/ModalPreview";

export default function Bentobox6() {
  const style = {
    background: "#228B22",
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
        <h2 className="bento-header">projects.</h2>
        <ModalPreview />
      </motion.div>
    </>
  );
}
