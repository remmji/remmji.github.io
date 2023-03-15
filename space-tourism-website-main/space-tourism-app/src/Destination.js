import React from 'react';
import Navbar from './Navbar';
import data from './data.json'
import { useState } from 'react';

function Destination() {
     const moon = data.destinations[0];
     const mars = data.destinations[1];
     const europa = data.destinations[2];
     const titan = data.destinations[3];
     const [planet,setPlanet] = useState(moon);

  return (
    <div className='destination-contener'>
        <Navbar/>

        <h5 className="destination-header">
            <span className="destination-header-numbers">01</span>
            PICK YOUR DESTINATION
        </h5>

        <main className="destination-main">
            <div className="planet">
                <img src={planet.images.png} alt={planet.name} className="planet-image" />
            </div>

            <div className="destination-text">
                <div className="tabs underline">
                    <button className='tab-btn' onClick={()=>setPlanet(moon)}>MOON</button>
                    <button className='tab-btn' onClick={()=>setPlanet(mars)}>MARS</button>
                    <button className='tab-btn' onClick={()=>setPlanet(europa)}>EUROPA</button>
                    <button className='tab-btn' onClick={()=>setPlanet(titan)}>TITAN</button>
                </div>

                <h2 className="planet uppercase">{planet.name}</h2>
                <p className="planet-description">{planet.description}</p>
                <div className="big-numbers-container">
                    <div className="left">
                        <p className="subheading-2">AVG. DISTANCE</p>
                        <p className="subheading uppercase">{planet.distance}</p>
                    </div>
                    <div className="right">
                         <p className="subheading-2">EST. TRAVEL TIME</p>
                        <p className="subheading uppercase">{planet.travel}</p>
                    </div>
                </div>
            </div>
        </main>
    </div>
  )
}

export default Destination