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
  return (
    <div className="home container">
      <motion.h2 initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{delay:1.5, duration:1.5}}
      >
        Welcome to Pizza Joint
      </motion.h2>
      <Link to="/base">
        <motion.button 
        variants={buttonVariant}
 whileHover='hover'>
          Create Your Pizza
        </motion.button>
      </Link>
    </div>
  )
}

export default Home;