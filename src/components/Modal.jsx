import React, { useState } from 'react'
import './Modal.css'

export default function Modal({setModal}) {

  const[name, setName]= useState('')
  const[img, setImg]= useState('')
  const[price, setPrice]= useState('')
  const[description, setDescription]= useState('')
  const[phone, setPhone]= useState('')
  const[year, setYear]= useState('')
  const[email, setEmail]= useState('')


  let addCar =(e)=>{
    e.preventDefault()

    let all = {
      name: name,
      imgUrl: img,
      price: price,
      description: description,
      phone: phone,
      year: year,
      email: email
    }

    fetch("https://67879df0c4a42c9161079478.mockapi.io/api/v1/user",{
      method: 'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body:JSON.stringify(all)
    })
  }
  return (
    <div className='box-2'>
        <div className='modal-2'>
          <img className='modal-2-x' onClick={()=> setModal(false)} src="../x.png" alt="" />
            <form action="" onSubmit={addCar}>
                <input type="text" placeholder='Name' value={name} onChange={(e)=> setName(e.target.value)} className='addInp'/> <br />
                <input type="text" placeholder='ImgUrl' value={img} onChange={(e)=> setImg(e.target.value)} className='addInp'/> <br />
                <input type="text" placeholder='Price' value={price} onChange={(e)=> setPrice(e.target.value)} className='addInp'/> <br />
                <input type="text" placeholder='Description' value={description} onChange={(e)=> setDescription(e.target.value)} className='addInp'/> <br />
                <input type="text" placeholder='Phone number' value={phone} onChange={(e)=> setPhone(e.target.value)} className='addInp'/> <br />
                <input type="text" placeholder='Car year' value={year} onChange={(e)=> setYear(e.target.value)} className='addInp'/> <br />
                <input type="email" placeholder='Your email' value={email} onChange={(e)=> setEmail(e.target.value)} className='addInp'/> <br />
                <button className='addBtn'>Add car</button>
            </form>
        </div>
    </div>
  )
}
