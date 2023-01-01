import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

const Contact = () => {

  const [ input, setInput ] = useState({ firstName: '', lastName: '', email: '', message: '' });

  const handleChange = (event) => {
    setInput((prevState) => {
      return { ...prevState, [event.target.name]: event.target.value }
    });
  }; 

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await axios.post('/api/contact', input);
    setInput({ firstName: '', lastName: '', email: '', message: '' });
  }; 

  return (
    <div id='containerAdjustable'>
      <Typography variant='h4' component='h1'>CONTACT</Typography>
        <form onSubmit={handleSubmit}>

          <TextField 
            id='firstName' 
            name='firstName' 
            label='FIRST NAME'
            margin='dense'
            size='small'
            variant='filled'
            sx={{backgroundColor: '#C0C0C0', color: '#4D73FF'}}
            value={input.firstName} 
            onChange={handleChange} 
            fullWidth
            required
          /><br />

          <TextField 
            id='lastName' 
            name='lastName' 
            label='LAST NAME'
            margin='dense'
            size='small'
            variant='filled'
            sx={{backgroundColor: '#C0C0C0', color: '#4D73FF'}}
            value={input.lastName} 
            onChange={handleChange} 
            fullWidth
            required
          /><br />

          <TextField 
            id='email' 
            name='email' 
            label='EMAIL'
            margin='dense'
            size='small'
            type='email' 
            variant='filled'
            sx={{backgroundColor: '#C0C0C0', color: '#4D73FF'}}
            value={input.email} 
            onChange={handleChange} 
            fullWidth
            required
          /><br />

          <TextField
            id='message'
            name='message'
            label='MESSAGE'
            margin='dense'
            size='small'
            variant='filled'
            rows={10}
            sx={{backgroundColor: '#C0C0C0', color: '#4D73FF'}}
            value={input.message}
            onChange={handleChange}
            fullWidth
            multiline
            required
          /><br />

          <Button sx={{backgroundColor: '#C0C0C0', color: '#000000'}} type='submit' variant='contained'>
            SUBMIT
          </Button>

        </form>
    </div>
  );
};

export default Contact;
