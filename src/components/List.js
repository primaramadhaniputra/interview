import React, { useEffect, useState } from 'react';
import SingleList from './SingleList';

const List = () => {


   const [data, setData] = useState([]);

   const fetchApi = async () => {
      const response = await fetch('https://newsapi.org/v2/everything?q=Apple&from=2022-02-07&sortBy=popularity&apiKey=397cc2244fdf490aac5c41136ebdd36f')

      const data = await response.json()
      console.log(data.articles);
      setData(data.articles)
   }

   useEffect(() => {
      fetchApi()
   }, [])
   return <div className='list'>
      <div className='list-title'>
         <p>Just for You</p>
         <button>see more</button>
      </div>
      <div className='single-list-container'>
         {
            data.length === 0 ? <p>loading ...</p> : data.map((item, index) => {
               return <SingleList key={index} {...item} />
            })
         }

      </div>
   </div>;
};

export default List;
