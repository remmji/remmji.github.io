import React from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import PageTransition from './PageTransition';
import { motion,AnimatePresence } from 'framer-motion';

const text = "SO, YOU WANT TO TRAVEL TO";
const letterDelay = 0.1;

function TypingText() {
  const letters = text.split("");
  return (
    <AnimatePresence>
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 10 }}
          transition={{ duration: 0.5, delay: index * letterDelay }}
        >
          {letter}
        </motion.span>
      ))}
    </AnimatePresence>
  );
}


function Home() {
  
  return (
   <PageTransition>
   <div className="home-background">
    <Navbar/>
    <main className="home-content">
        <div className="home-text">
            <motion.h5><TypingText/></motion.h5>
            <motion.h1
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration:3, delay:3}}
            >SPACE</motion.h1>
            <motion.p
            initial={{ opacity: 0}}
            animate={{ opacity: 1 }}
            transition={{ duration:1, delay:5}} className='home-paragraph'>Let’s face it... if you want to go to space, you might as well genuinely go to 
                outer space and not hover kind of on the edge of it. Well sit back, and relax 
                because we’ll give you a truly out of this world experience!</motion.p>
        </div>
        <div className="home-button">
          <Link to='/Destination'><button className='home-btn'>EXPLORE</button></Link> 
        </div>
    </main>
   </div>
   </PageTransition>
  )
}

export default Home;
