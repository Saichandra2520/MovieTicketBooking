import React, { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';

const BookingForm = () => {
    
    const { showId } = useParams();
    const [show, setShow] = useState([]);
    useEffect(() => {
        fetch(`https://api.tvmaze.com/shows/${showId}`)
          .then(response => response.json())
          .then(data => {
            setShow(data);
            setFormData(prevFormData => ({
              ...prevFormData,
              movieName : data.name,
            }))
          })
          .catch(error => {
            console.error(error);
          });
      }, [showId]);


    
  
 // State to store form data

  const [formData, setFormData] = useState({
    
    name: '',
    email: '',
    movieName: '',
  });
  console.log(show.name);

  // Function to handle changes in form

  const handleFormChange = e => {
    setFormData(prevFormData => ({
      ...prevFormData,
      [e.target.name]: e.target.value,
    }));
  };

// Function to handle form submit 

  const handleFormSubmit = e => {
    e.preventDefault();
    
     // Retrieve existing tickets from localStorage (if any)
    const existingTickets = JSON.parse(localStorage.getItem('tickets')) || [];

    // Create a new ticket object
    const newTicket = formData;

    // Add the new ticket to the existing array of tickets
    const updatedTickets = [...existingTickets, newTicket];

    // Store the updated array of tickets in localStorage
    localStorage.setItem('tickets', JSON.stringify(updatedTickets));

    alert("Ticket Booked Succesfully !!!");

  };

  return (
    <div className="booking-container">
      <h1>Booking Form </h1>
      
      <form onSubmit={handleFormSubmit}>
        <div className="form-group">
          <label>Full Name :</label>
          <input type="text" name="name" value={formData.name} onChange={handleFormChange} required />
        </div>
        <div className="form-group">
          <label>Email :</label>
          <input type="email" name="email" value={formData.email} onChange={handleFormChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Movie Name :</label>
          <input
            type="text"
            name="movieName"
            value={formData.movieName}
            disabled
          />
        </div>
        <button type="submit">Book Ticket</button>
      </form>
    </div>
  );
};

export default BookingForm;
