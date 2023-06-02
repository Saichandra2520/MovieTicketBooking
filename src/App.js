

import React, { useEffect, useState } from 'react'
import { Routes,Route } from 'react-router-dom';
import MovieSummary from './MovieSummary';
import Allmovies from './Allmovies';
import BookingForm from './BookingForm';

function App() {

  

// App component

  return (
    <div className='app'>
      {/* Heading of the application */}
        <header><h1>Movie Tickets Booking</h1></header>
        
        <div className='movie-wrapper'>

          {/* Routes to different path and respective component */}
          <Routes>
            <Route exact path='/' element={<Allmovies />} />
            <Route path='/movie-summary/:showId' element={<MovieSummary />} />
            <Route path="/book-ticket/:showId" element={<BookingForm />} />
         </Routes>
        </div>

        
    </div>
  )
}

export default App;
