import React from 'react'
import Navbar from './Navbar';
import data from './data.json'
import { useState,useEffect } from 'react';

function Technology() {
    
    const vehicle = data.technology[0];
    const spaceport = data.technology[1];
    const capsule = data.technology[2];
    const [machine,setMachine] = useState(vehicle);
    const [image, setImage] = useState(machine.images.portrait);

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
    <div className="technology-container">
        <Navbar/>
         <h5 className="destination-header">
            <span className="destination-header-numbers">03</span>
            SPACE LAUNCH 101
        </h5>

        <main className="technology-grid">
            <div className="technology-text-container">
                <div className="btns-flex-container">
                    <button className="tech-btn"
                    onClick={()=>handleButtonClick(vehicle)}>
                        1
                    </button>
                    <button className="tech-btn"
                    onClick={()=>handleButtonClick(spaceport)}>
                        2
                    </button>
                    <button className="tech-btn"
                    onClick={()=>handleButtonClick(capsule)}>
                        3
                    </button>
                </div>
                <div className="tech-content-text">
                    <h5 className="top-text">THE TERMINOLOGY...</h5>
                    <h3 className="vehicle-name uppercase">{machine.name}</h3>
                    <p className="tech-para">{machine.description}</p>
                </div>
            </div>

            <div className="technology-image-container">
                <img src={image} alt={machine.name} className='machine-image'/>
            </div>

        </main>


    </div>
  )
}

export default Technology