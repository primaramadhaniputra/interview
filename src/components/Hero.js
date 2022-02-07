import React from 'react';
import img from '../img/bf2.jpg'

const Hero = () => {
   return <div className='hero'>
      <p className='date'> saturday, august 21th</p>
      <h2>Welcome back, <br /> Jennifer</h2>

      <div class="hero-type">
         <ul>
            <li>feeds</li>
            <li>popular</li>
            <li>Following</li>
         </ul>
      </div>
      <div className='hero-img'>
         <img src={img} alt="dummy-img" />
         <div className='hero-info'>
            <div className='info-btn'>
               <button>life component</button>
               <button>knowledge</button>
            </div>
            <div className='hero-text'>
               <h2>minimal things you <br /> should now</h2>
            </div>
         </div>
      </div>
   </div>;
};

export default Hero;
