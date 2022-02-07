import React from 'react';
import { BsCircleFill } from 'react-icons/bs'
import { FcBusinessman } from 'react-icons/fc'


const Navbar = () => {
   return <nav>
      <div className='nav-title'>
         <BsCircleFill />
         <h4>Bulletin News</h4>
      </div>
      <FcBusinessman className='profile' />
   </nav>;
};

export default Navbar;
