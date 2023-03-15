import React from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

function Home() {
  
  return (
   
   <div className="home-background">
    <Navbar/>
    <main className="home-content">
        <div className="home-text">
            <h5>SO, YOU WANT TO TRAVEL TO</h5>
            <h1>SPACE</h1>
            <p className='home-paragraph'>Let’s face it; if you want to go to space, you might as well genuinely go to 
                outer space and not hover kind of on the edge of it. Well sit back, and relax 
                because we’ll give you a truly out of this world experience!</p>
        </div>
        <div className="home-button">
          <Link to='/Destination'><button className='home-btn'>EXPLORE</button></Link> 
        </div>
    </main>
   </div>
   
  )
}

export default Home;
