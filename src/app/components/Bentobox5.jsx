import { motion } from "framer-motion";

export default function Bentobox5() {
  return (
    <>
      <motion.div
        className="div5 bento-box"
        animate={{
          x: 0,
          opacity: 1,
          transition: { duration: 1, ease: "easeOut" },
        }}
        initial={{ x: "-150vh", opacity: 0 }}
      >
        <h2 className="bento-header">who am i.</h2>
        <p style={{ textAlign: "center" }}>
          Fullstack Dev based in Berlin with a background in management
        </p>
      </motion.div>
    </>
  );
}
