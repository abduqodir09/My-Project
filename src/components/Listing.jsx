import React from 'react'
import './Listing.css'
import {product} from "./Data"

export default function Listing() {
  return (
    <div>
        <div className='listing-div'>
            <div className='listing-div-w'>
                <h1 className='listing-div-w-h1'>Buying and selling cars has never been easier!</h1>
                <p className='listing-div-w-p'>Leading online car buying and selling platform. helps users buy cars that are right for them</p>
            </div>
        </div>
        <div className='listing-2-div'>
            <h1 className='listing-2-div-h1'>We provide you with the best cars</h1>
            <div className='listing-card'>
                {
              product.map((item)=>{
                return(
                  <div className='liting-cards' key={item.id}>
                    <img className='listing-cards-img' src={item.imgUrl} alt="" />
                    <h2 className='listing-cards-name'>{item.name}</h2>
                    <b className='listing-cards-price'>{item.price}</b><br />
                    <i className='listing-cards-year'>Year: {item.year}</i><br />
                  </div>
                )
              })
            }
            </div>
        </div>
        <br /><br />
    </div>
  )
}
