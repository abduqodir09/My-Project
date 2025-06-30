import React from 'react'
import './Expert.css'

export default function Expert({setExpert}) {
  return (
    <div className='expert-1'>
        <div className='expert-2'>
            <img className='expert-1-img' onClick={()=> setExpert(false)} src="../x.png" alt="" /><br />
            <img className='expert-2-img' src="../4.png" alt="" />
            <h1 className='expert-2-h1'>Expert Service</h1>
            <p className='expert-2-p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum dolorem omnis placeat qui inventore aliquid aut accusantium.</p>
        </div>
    </div>
  )
}
