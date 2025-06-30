import React from 'react'
import './Contact.css'
import { useNavigate } from 'react-router-dom'

export default function Contact() {
    let navigate = useNavigate()
  return (
    <div>
        <img onClick={()=> navigate('/')} className='ground' src="../ground.png" alt="" />
        <iframe className='location-ground' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2738.8855696213477!2d69.1963888748409!3d41.390505659447946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8d007576ab05%3A0x8f3f3ad5f74ba43d!2sSaidbek%20uyi!5e0!3m2!1sen!2s!4v1750073426188!5m2!1sen!2s" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        <h1 className='contact-h1'>Contact us</h1>
        <div className="inputs">
            <input type="text" placeholder='Your name' className='Contact-inp'/> 
            <input type="text" placeholder='Your addres' className='Contact-inp'/> <br />
            <input type="text" placeholder='Your subject' className='Contact-inp'/> 
            <input type="email" placeholder='Your email' className='Contact-inp'/> <br />
            <textarea className='textarea' name="" id="">Your Message</textarea> <br />
            <button className='SendBtn'>Send Your Message</button> <br /><br />
        </div>
    </div>
  )
}
