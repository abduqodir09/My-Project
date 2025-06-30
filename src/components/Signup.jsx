import React, { useState } from 'react'
import './Signup.css'

export default function Signup({ setSignup }) {

  const [api, setApi] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setApi(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("https://67879df0c4a42c9161079478.mockapi.io/api/v1/market", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(api)
    })
    .then((res) => res.json())
    .then((data) => {

    });
  }

  return (
    <div className='box-1'>
      <div className='modal-1'>
        <img onClick={() => setSignup(false)} className='close-img' src="../x.png" alt="Close" />
        <form onSubmit={handleSubmit}>
          <input className='sign-inp' type="text" placeholder='User name' name='name' onChange={handleChange} /> <br /><br />
          <input className='sign-inp' type="email" placeholder='User email' name='email' onChange={handleChange} /> <br /><br />
          <input className='sign-inp' type="password" placeholder='User password' name='password' onChange={handleChange} /> <br /><br />
          <button className='signBtn'>Register</button>
        </form>
      </div>
    </div>
  );
}
