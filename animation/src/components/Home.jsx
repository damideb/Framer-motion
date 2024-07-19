import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="home container">
      <motion.h2 initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{delay:1.5, duration:1.5}}
      >
        Welcome to Pizza Joint
      </motion.h2>
      <Link to="/base">
        <motion.button animate={{scale:1.5}} whileHover={{scale:1.1}}>
          Create Your Pizza
        </motion.button>
      </Link>
    </div>
  )
}

export default Home;