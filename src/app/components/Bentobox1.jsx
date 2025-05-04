import { motion } from "framer-motion";

export default function Bentobox1() {
  return (
    <>
      <motion.div
        className="div1 bento-box"
        animate={{
          y: 0,
          opacity: 1,
          transition: { duration: 0.8, ease: "easeOut" },
        }}
        initial={{ y: "-100vh", opacity: 0 }}
      >
        <div className="my-name-is-wrapper">
          <h2>Hello</h2>
          <h3>my name is</h3>
        </div>
        <div className="name_container">
          <h1>Burak</h1>
        </div>
      </motion.div>
    </>
  );
}
