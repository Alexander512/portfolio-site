import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navigation from './Navigation';
import Footer from './Footer';

const Contact = () => {

  const [ input, setInput ] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '' 
  });

  const handleChange = (event) => {
    setInput((prevState) => {
      return { ...prevState, [event.target.name]: event.target.value }
    });
  }; 

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await axios.post('/api/contact', input);
    setInput({
      firstName: '',
      lastName: '',
      email: '',
      message: ''
    });
  }; 

  return (
    <div id='containerContact'>
      <Navigation />

      <h1>CONTACT</h1>

        <form onSubmit={handleSubmit}>

          <label htmlFor='firstName'>FIRST NAME</label>
          <input 
            id='firstName' 
            name='firstName' 
            type='text' 
            value={input.firstName} 
            onChange={handleChange} 
            required
          />

          <label htmlFor='lastName'>LAST NAME</label>
          <input 
            id='lastName' 
            name='lastName' 
            type='text' 
            value={input.lastName} 
            onChange={handleChange} 
            required
          />

          <label htmlFor='email'>EMAIL ADDRESS</label>
          <input 
            id='email' 
            name='email' 
            type='email' 
            value={input.email} 
            onChange={handleChange} 
            required
          />

          <label htmlFor='message'>MESSAGE</label>
          <textarea
            id='message'
            name='message'
            type='text'
            value={input.message}
            onChange={handleChange}
            required
          />

          <button>SUBMIT</button>

        </form>

      <Footer />

    </div>
  );
};

export default Contact;
