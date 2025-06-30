import React from 'react'
import './Browse.css'

export default function Browse({setBrowse}) {
  return (
    <div className='browse-1'>
        <div className='browse-2'>
            <img className='browse-1-img' onClick={()=> setBrowse(false)} src="../x.png" alt="" /><br />
            <img className='browse-2-img' src="../1.png" alt="" />
            <h1 className='browse-2-h1'>Browse inventory</h1>
            <p className='browse-2-p'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam minima omnis nam pariatur aliquid illo error. Officiis.</p>
        </div>
    </div>
  )
}
