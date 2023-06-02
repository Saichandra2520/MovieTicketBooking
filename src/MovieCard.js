import React from 'react'
import { Link } from 'react-router-dom';


const MovieCard = ({movie}) => {


    const imgSrc = `${movie.show.image.medium}`;
    const movieName = movie.show.name;

    // Function to Concat genre 
    function addGenre(genre,ind)
    {
        return genre + '/' + ind;
    }

    const movieGenres = movie.show.genres.reduce(addGenre);

  return (
    <>
    <div className='card-container'>
        <img src={imgSrc} alt='movieposter'/>
        <h3>{movieName}</h3>
        <p>{movieGenres}</p>
        <Link to={`/movie-summary/${movie.show.id}`} ><button>View Summary</button></Link>
    </div>
    </>
  )
}

export default MovieCard;