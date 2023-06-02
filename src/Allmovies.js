import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard';

const Allmovies = () => {

  // State to store movie data fetched from API
  const [movies, setMovies] = useState([]);

  // function to fetch data from API
  const fetchMoviesData = () => {fetch('https://api.tvmaze.com/search/shows?q=all')
               .then((response) => 
               {
                return response.json()})
               .then((data) =>
               {
                 setMovies(data);
                 
               })
            };

  useEffect(() =>
  {
     fetchMoviesData()
  },[]);

  return (
    <div className='all-movies-container'>
      {/* Loop the fetched data to get individual movie data */}
    {
        movies.map((movie) =>(
          <div key={movie.show.id}>
            <MovieCard movie = {movie} />
          </div>
        ))
    }
    </div>
  )
}

export default Allmovies