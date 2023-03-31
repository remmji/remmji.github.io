import React from 'react'
import Navbar from './Navbar';
import data from './data.json'
import { useState,useEffect } from 'react';
import PageTransition from './PageTransition';
import { motion } from 'framer-motion';


function Technology() {
    
    const vehicle = data.technology[0];
    const spaceport = data.technology[1];
    const capsule = data.technology[2];
    const [machine,setMachine] = useState(vehicle);
    const [image, setImage] = useState(machine.images.portrait);
    const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    setActiveTab(0);
  }, []);

const handleButtonClick = (selectedMachine) => {
  setMachine(selectedMachine);
  if (window.innerWidth <= 55*16) {
    setImage(selectedMachine.images.landscape);
  } else {
    setImage(selectedMachine.images.portrait);
  }
};
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 55*16) {
        setImage(machine.images.landscape);
      } else {
        setImage(machine.images.portrait);
      }
    };

   window.addEventListener("resize", handleResize);
  return () => {
    window.removeEventListener("resize", handleResize);
  };
}, [machine]);


  return (
    <PageTransition>
    <div className="technology-container">
        <Navbar/>
         <h5 className="destination-header">
            <span className="destination-header-numbers">03</span>
            SPACE LAUNCH 101
        </h5>

        <main className="technology-grid">
            <div className="technology-text-container">
                <div className="btns-flex-container">
                    <motion.button className="tech-btn" role='tab' aria-selected={activeTab === 0 ? "true" : "false"}
                    onClick={()=>{handleButtonClick(vehicle); setActiveTab(0)}}
                    whileHover={{scale: 1.1}}
                    whileTap={{scale: 0.8}}>
                        1
                    </motion.button>
                    <motion.button className="tech-btn" role='tab' aria-selected={activeTab === 1 ? "true" : "false"}
                    onClick={()=>{handleButtonClick(spaceport); setActiveTab(1)}}
                    whileHover={{scale: 1.1}}
                    whileTap={{scale: 0.8}}>
                        2
                    </motion.button>
                    <motion.button className="tech-btn" role='tab' aria-selected={activeTab === 2 ? "true" : "false"}
                    onClick={()=>{handleButtonClick(capsule); setActiveTab(2)}} whileHover={{scale: 1.1}}
                    whileTap={{scale: 0.8}}>
                        3
                    </motion.button>
                </div>
                <div className="tech-content-text">
                    <h5 className="top-text">THE TERMINOLOGY...</h5>
                    <motion.h3 className="vehicle-name uppercase"
                    key={machine.name}
                    initial={{ x:500, opacity:0 }}
                    animate={{ x:0, opacity:1 }}
                    transition={{ duration:0.6, delay:0.6 }}>{machine.name}
                    </motion.h3>

                    <motion.p className="tech-para"
                    key={machine.description}
                    initial={{ x:500, opacity:0 }}
                    animate={{ x:0, opacity:1 }}
                    transition={{ duration:0.6, delay:1 }}>{machine.description}
                    </motion.p>
                </div>
            </div>

            <div className="technology-image-container">
                <motion.img src={image} alt={machine.name} className='machine-image'
                 key={image}
                 initial={{ x:500, opacity:0 }}
                 animate={{ x:0, opacity:1 }}
                 transition={{ duration:0.6, delay:0.6 }}/>
            </div>

        </main>


    </div>
    </PageTransition>
  )
}

export default Technology