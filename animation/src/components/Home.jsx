import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {

  const buttonVariant = {
    hover:{
      scale:1.1,
      textShadow:'0px 0px 8px rgb(255,255,255)',
      boxShadow:'0px 0px 8px rgb(255,255,255)',
      transition:{
        repeat:Infinity,
        duration:1 // works just like keyframes. It transitions the scale to 1.1 infinitely. it can be set to whatever time you want it to run for

      }
    }
  }
  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: { delay: 1.5, duration: 1.5 },
    },
    exit: {
      x: "-100vh",
      transition: { ease: "easeInOut" },
    },
  };

  return (
    <motion.div
      className="home container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h2>Welcome to Pizza Joint</h2>
      <Link to="/base">
        <motion.button variants={buttonVariant} whileHover="hover">
          Create Your Pizza
        </motion.button>
      </Link>
    </motion.div>
  );
}

export default Home;