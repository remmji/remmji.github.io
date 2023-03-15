import React from 'react'
import Navbar from './Navbar';
import data from './data.json'
import { useState } from 'react';


function Crew() {
    
    const commander = data.crew[0];
    const specialist = data.crew[1];
    const pilot = data.crew[2];
    const engineer =data.crew[3];
    const [person,setPerson] = useState(commander);

  return (
    <div className='crew-container'>
         <Navbar/>

        <h5 className="destination-header-crew">
            <span className="destination-header-numbers">02</span>
                MEET YOUR CREW
        </h5>

        <main className="crew-main">

            <div className="crew-left-column">
                <h4 className="role uppercase grey">{person.role}</h4>
                <h3 className="name uppercase">{person.name}</h3>
                <p className="bio">{person.bio}</p>
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
                <img src={person.images.png} alt={person.name} className='person-img' />
            </div>

            

        </main>


    </div>
  )
}

export default Crew