import React from 'react';
import Navbar from './Navbar';
import data from './data.json'
import { useState } from 'react';
import PageTransition from './PageTransition';
import { motion } from 'framer-motion';

function Destination() {
     const moon = data.destinations[0];
     const mars = data.destinations[1];
     const europa = data.destinations[2];
     const titan = data.destinations[3];
     const [planet,setPlanet] = useState(moon);

  return (
    <PageTransition>
    <div className='destination-contener'>
        <Navbar/>

        <h5 className="destination-header">
            <span className="destination-header-numbers">01</span>
            PICK YOUR DESTINATION
        </h5>

        <main className="destination-main">
            <motion.div className="planet"
            key={planet.images.png}
                initial={{ rotate: 0 }}
                animate={{ rotate:10}}
                transition={{ duration: 15,repeat:'Infinite' }}>

                <motion.img src={planet.images.png} alt={planet.name} className="planet-image"
                key={planet.images.png}
                initial={{ scale: 0 }}
                animate={{ scale: 1.2}}
                transition={{ duration: 2 }}
                 />
            </motion.div>

            <div className="destination-text">
                <div className="tabs underline">
                    <button className='tab-btn' onClick={()=>setPlanet(moon)}>MOON</button>
                    <button className='tab-btn' onClick={()=>setPlanet(mars)}>MARS</button>
                    <button className='tab-btn' onClick={()=>setPlanet(europa)}>EUROPA</button>
                    <button className='tab-btn' onClick={()=>setPlanet(titan)}>TITAN</button>
                </div>

                <motion.h2 className="planet uppercase"
                key={planet.name}
                initial={{ y:-1000 }}
                animate={{ y:0 }}
                transition={{ duration: 1 }}>{planet.name}
                </motion.h2>

                <motion.p className="planet-description"
                key={planet.description}
                initial={{ x:500, opacity:0 }}
                animate={{ x:0, opacity:1 }}
                transition={{ duration:1, delay:1 }}>{planet.description}
                </motion.p>

                <motion.div className="big-numbers-container"
                key={planet.distance}
                initial={{ opacity:0 }}
                animate={{ opacity: 1}}
                transition={{ duration: 1,delay:2 }}>

                    <div className="left">
                        <p className="subheading-2">AVG. DISTANCE</p>
                        <p className="subheading uppercase">{planet.distance}</p>
                    </div>
                    <div className="right">
                         <p className="subheading-2">EST. TRAVEL TIME</p>
                        <p className="subheading uppercase">{planet.travel}</p>
                    </div>
                </motion.div>
            </div>
        </main>
    </div>
    </PageTransition>
  )
}

export default Destination