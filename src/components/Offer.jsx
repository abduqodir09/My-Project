import React from 'react'
import './Offer.css'

export default function Offer({setOffer}) {
  return (
    <div className='offer-1'>
        <div className='offer-2'>
            <img className='offer-1-img' onClick={()=> setOffer(false)} src="../x.png" alt="" /><br />
            <img className='offer-2-img' src="../2.png" alt="" />
            <h1 className='offer-2-h1'>Get An Offer</h1>
            <p className='offer-2-p'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis ipsam eaque omnis nihil velit, nostrum neque animi!</p>
        </div>
    </div>
  )
}
