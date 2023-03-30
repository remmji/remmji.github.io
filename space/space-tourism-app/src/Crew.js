import React from 'react'
import Navbar from './Navbar';
import data from './data.json'
import { useState } from 'react';
import PageTransition from './PageTransition';
import { motion } from 'framer-motion';

function Crew() {
    
    const commander = data.crew[0];
    const specialist = data.crew[1];
    const pilot = data.crew[2];
    const engineer =data.crew[3];
    const [person,setPerson] = useState(commander);

  return (
    <PageTransition>
    <div className='crew-container'>
         <Navbar/>

        <h5 className="destination-header-crew">
            <span className="destination-header-numbers">02</span>
                MEET YOUR CREW
        </h5>

        <main className="crew-main">

            <div className="crew-left-column">
                <motion.h4 className="role uppercase grey"
                key={person.role}
                initial={{ x:500, opacity:0 }}
                animate={{ x:0, opacity:1 }}
                transition={{ duration:0.6, delay:0.6 }}>{person.role}</motion.h4>
                <motion.h3 className="name uppercase"
                key={person.name}
                initial={{ x:500, opacity:0 }}
                animate={{ x:0, opacity:1 }}
                transition={{ duration:0.6, delay:1.2 }}>{person.name}</motion.h3>
                <motion.p className="bio"
                key={person.bio}
                initial={{ x:500, opacity:0 }}
                animate={{ x:0, opacity:1 }}
                transition={{ duration:0.6, delay:1.6 }}>{person.bio}</motion.p>
            <div className="slider">
                <button className="slider-btn"
                onClick={()=>setPerson(commander)} ></button>
                <button className='slider-btn'
                onClick={()=>setPerson(specialist)} ></button>
                <button className='slider-btn'
                onClick={()=>setPerson(pilot)} ></button>
                <button className='slider-btn'
                onClick={()=>setPerson(engineer)} ></button>
            </div>
            </div>


            <div className="crew-right-column">
                <motion.img src={person.images.png} alt={person.name} className='person-img'
                key={person.role}
                initial={{ y:500, opacity:0 }}
                animate={{ y:0, opacity:1 }}
                transition={{ duration:1, delay:1 }} />
            </div>

            

        </main>


    </div>
    </PageTransition>
  )
}

export default Crew