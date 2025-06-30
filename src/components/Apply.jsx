import React from 'react'
import './Apply.css'

export default function Apply({setApply}) {
  return (
    <div className='apply-1'>
        <div className='apply-2'>
            <img className='appyly-1-img' onClick={()=> setApply(false)} src="../x.png" alt="" /><br />
            <img className='apply-2-img' src="../3.png" alt="" />
            <h1 className='apply-2-h1'>Apply For Financing</h1>
            <p className='apply-2-p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto voluptatum harum consequatur libero nam vel reprehenderit in?</p>
        </div>
    </div>
  )
}
