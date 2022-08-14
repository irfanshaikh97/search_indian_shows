import React from 'react';
import '../components/shows.css';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';


function Shows() {
  const [showData, setShowData] = useState([]);

  useEffect(() => {
    fetch("https://api.tvmaze.com/schedule?country=US&date=2022-08-11")
    .then((respo)=> respo.json())
    .then((res)=>{
      setShowData(res)
    })
  
   
  }, [])
  

  
  return (
    <>
      <h2 className='show_heading'>Shows to watch - Find the best for you with JustWatch</h2>
      <div className='shows_container'>
        {showData.map((data,) => (
        <Link to={`/show/${data.show.id}`}><div className='card' key={data.id}>
          <img src={data.show.image.medium}  alt="text" className='card_image' />
       </div>
       </Link>
        ))} 
       </div>

    </>

  )
}

export default Shows