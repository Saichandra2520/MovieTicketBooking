import React, { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';

const MovieSummary = () => {
  
  // Used params to get show id
  const { showId } = useParams();
  const [show, setShow] = useState([]);

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${showId}`)
      .then(response => response.json())
      .then(data => {
        setShow(data);
        console.log(data);
      })
      .catch(error => {
        console.error(error);
      });
  }, [showId]);
  

 
  const handleBookTicket = () => {
   
  // Redirect to the booking form page
  window.location.href = `/book-ticket/${showId}`;
  };
  

    
  return (
    <div className='movie-summary'>
      <div className='summary-Top'>
        {show.image && <img src={show.image.medium} alt='movie-iamge'/>}
        <div className='movie-details'>
            {show && <h2>{show.name}</h2>}
            {/* {show && movieGenres && <p>Genre : {movieGenres}</p>} */}
            <p>Language : {show.language}</p>
            <p>Premiered On :  {show.premiered}</p>
            <button onClick={handleBookTicket}>Book Now</button>
        </div>
      </div>
      <div className='summary-down'>
        <h3 id='hi'>About the Movie</h3>
        <div dangerouslySetInnerHTML={{__html: `${show.summary}`}} />
      </div>
    </div>
  )
}

export default MovieSummary;