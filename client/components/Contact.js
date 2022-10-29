import React, { useState } from 'react';
import Footer from './Footer';

const Contact = () => {

  const [ firstName, setFirstName ] = useState('');

  const [ lastName, setLastName ] = useState('');

  const [ email, setEmail ] = useState('');

  const [ message, setMessage ] = useState('');

  const handleChangeFirstName = (event) => {
    setFirstName(event.target.value);
    console.log(event.target.value);
  };

  const handleChangeLastName = (event) => {
    setLastName(event.target.value);
  };

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleChangeMessage = (event) => {
    setMessage(event.target.value);
  };
 
  const handleSubmit = (event) => {
    event.preventDefault();
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
            value={firstName} 
            onChange={handleChangeFirstName} 
            required
          />

          <label htmlFor='lastName'>Last Name</label>
          <input 
            id='lastName' 
            name='lastName' 
            type='text' 
            value={lastName} 
            onChange={handleChangeLastName} 
            required
          />

          <label htmlFor='email'>Email Address</label>
          <input 
            id='email' 
            name='email' 
            type='email' 
            value={email} 
            onChange={handleChangeEmail} 
            required
          />

          <label htmlFor='message'>Message</label>
          <textarea
            id='message'
            name='message'
            type='text'
            value={message}
            onChange={handleChangeMessage}
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
