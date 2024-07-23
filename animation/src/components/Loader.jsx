import { motion, useCycle } from "framer-motion";

const loaderVariants = {
  animationOne: {
    x: [-20, 20],
    y: [0, -30],
    transition: {
      x: {
        repeat: Infinity,
        duration: 0.5,
      },
      y: {
        repeat: Infinity,
        duration: 0.25,
        ease: "easeOut",
      },
    },
  },
};

const Loader = () => {
const[animation, useCylcleAnimation] = useCycle()
  return (
    <>
      <motion.div
        className="loader"
        variants={loaderVariants}
        onClick={() => "djd"}
        animate="animationOne"
      ></motion.div>
    </>
  );
};

export default Loader;
