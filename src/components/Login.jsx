import React, { useState } from 'react'
import './Login.css'

export default function Login({setLogin}) {
    let hom =()=>{
        setLogin(false)
    }

    const[user, setUser] = useState({name: '', password: ''})


  let getValue =(e)=>{
    setUser({...user, [e.target.name]: e.target.value})
  }

  let login =(e)=>{
    e.preventDefault()

    fetch('https://67879df0c4a42c9161079478.mockapi.io/api/v1/market')
    .then((res)=>res.json())
    .then((data)=>{
      
    })
  }
  return (
    <div className='box'>
        <div className="modal">
            <img className='closed' onClick={hom} src="../x.png" alt="" /><br /><br />
            <form action="" onChange={login}>
                <input className='login-inp' onChange={getValue} name='name' placeholder='User name' type="text" /> <br /><br />
                <input className='login-inp' onChange={getValue} name='password' type="password" placeholder='User password' /> <br /><br />
                <button className='loginBtn'>Login</button>
            </form>
        </div>
    </div>
  )
}
