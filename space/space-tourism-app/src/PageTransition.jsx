import React from 'react'
import {motion} from "framer-motion";


const animations = {
    initial: {
      scale: 0,
      opacity: 0,
      transition: {
        duration: 1,
        ease: 'easeInOut',
      },
    },
    animate: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1,
        ease: 'easeInOut',
      },
    },
    exit: {
      scale: 2,
      opacity: 0,
      transition: {
        duration: 1,
        ease: 'easeInOut',
      },
    },
  };

function PageTransition({children}) {
  return (
  <>
    <motion.div variants={animations}
      initial="initial" 
      animate="animate" 
      exit="exit">
      {children}
    </motion.div>
  </>
  )
 

}

export default PageTransition