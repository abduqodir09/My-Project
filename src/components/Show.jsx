import React from 'react'
import {product} from "./Data"
import { useParams } from 'react-router-dom'
import './Show.css'

export default function Show() {

  let { id } = useParams();
  let data2 = product.find((item) => item.id === Number(id))


  let ise = ()=>{
    alert('This car is bought')
  }

  return (
    <div>
      <div className="show-div">
        <div className="show-left">
          <img className='show-img' src={data2.imgUrl} alt="" />
        </div>
        <div className="show-right">
          <h1 className='show-name'>{data2.name}</h1><br />
          <i className='show-year'>Year: {data2.year}</i>
          <h3 className='show-price'>{data2.price}</h3>
          <p className='show-desc'>{data2.description}</p>
          <p className='show-phone'>{data2.phone}</p>
          <p className='show-email'>{data2.email}</p>
          <button className='show-buy' onClick={ise}>Buy</button>
        </div>
      </div>
    </div>
  )
}
