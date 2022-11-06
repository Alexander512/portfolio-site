import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Footer from './Footer';

const Contact = () => {

  const [ input, setInput ] = useState({});

  const handleChange = (event) => {
    setInput((prevState) => {
      return { ...prevState, [event.target.name]: event.target.value }
    });
  }; 

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await axios.post('/api/contact', input);
    setInput({});
  }; 

  return (
    <>

      <main id='containerMain'>

        <h1>Contact</h1>

        <form onSubmit={handleSubmit}>

          <label htmlFor='firstName'>First Name</label>
          <input 
            id='firstName' 
            name='firstName' 
            type='text' 
            value={input.firstName || ''} 
            onChange={handleChange} 
            required
          />

          <label htmlFor='lastName'>Last Name</label>
          <input 
            id='lastName' 
            name='lastName' 
            type='text' 
            value={input.lastName || ''} 
            onChange={handleChange} 
            required
          />

          <label htmlFor='email'>Email Address</label>
          <input 
            id='email' 
            name='email' 
            type='email' 
            value={input.email || ''} 
            onChange={handleChange} 
            required
          />

          <label htmlFor='message'>Message</label>
          <textarea
            id='message'
            name='message'
            type='text'
            value={input.message || ''}
            onChange={handleChange}
            required
          />

          <button>Submit</button>

        </form>

      </main>

      <Footer />

    </>
  );
};

export default Contact;
