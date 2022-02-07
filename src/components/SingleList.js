import React from 'react';
import infoImg from '../img/bf2.jpg'

const SingleList = ({ title, source, urlToImage }) => {


   return <div className='single-list'>
      <div className='single-info'>
         <button>productifiti</button>
         <p>{title}</p>
         <div className='info-btn'>
            <span>how to better</span>
            <span>4 min</span>
            <span>12 hours ago</span>
         </div>
      </div>
      <div className='single-img'>
         <img src={urlToImage} alt=" list img" />
      </div>
   </div>;
};

export default SingleList;
