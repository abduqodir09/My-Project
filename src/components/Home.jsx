
import { Link, } from 'react-router-dom'
import './Home.css'
import { useEffect, useRef, useState } from 'react'
import Login from './Login'
import Signup from './Signup'
import Modal from './Modal'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'


import { Swiper, SwiperSlide } from 'swiper/react';
import Browse from './Browse'
import Offer from './Offer'
import Apply from './Apply'
import Expert from './Expert'

import {product} from "./Data"



export default function Home() {
  const [login, setLogin] = useState(false)

  let home = () => {
    setLogin(true)
  }

  const [signup, setSignup] = useState(false)

  let sign = () => {
    setSignup(true)
  }


  const [modal, setModal] = useState(false)

  const[browse, setBrowse] = useState(false)
  const[offer, setOffer] = useState(false)
  const[aplly, setApply] = useState(false)
  const[expert, setExpert] = useState(false)



  return (
    <div className='allDiv'>
      <div className="headers">
        <header>
          <img className='header-logo' src="../logo.png" alt="" />
          <nav className='Navbar'>
            <a className='Nav-List' href="">Home</a>
            <Link to={'/listing'} className='Nav-List'>Listing Car</Link>
            <Link to={'/staffs'} className='Nav-List'>Staff</Link>
            <Link to={'/contact'} className='Nav-List'>Contact</Link>
          </nav>
          <div className="headerDiv">
            <img className='search' src="../search.png" alt="" />
            <img className='line' src="../line.png" alt="" />
            <img className='like' src="../like.png" alt="" />
            <img className='line' src="../line.png" alt="" />
            <img className='human-icon' src="../human.png" alt="" />
            <p className='header-p1' onClick={home}>Login</p>
            {login && <Login setLogin={setLogin} />}
            <p className='slesh'>/</p>
            <p className='header-p2' onClick={sign}>Register</p>
            {signup && <Signup setSignup={setSignup} />}
            <button onClick={() => setModal(true)} className='headerBtn'>Add car</button>
            {modal && <Modal setModal={setModal} />}
          </div>
        </header>
        <section className='section-1'>
          <h1 className='sec-1-h1'>2012 Nissan Leaf SV</h1>
          <div className="images">
            <img src="../used.png" alt="" />
            <img src="../speed.png" alt="" />
            <img src="../Est.png" alt="" />
          </div>
          <div className="chat">
            <Link to={'/comments'}><button className='ChatBtn'>Comments</button></Link>
            <div className="boxes">
              <img src="../rixsiboy.png" alt="" />
              <p className='human-name'>Kathlyn Murphy 3 hour ago</p>
            </div>
          </div>
        </section>
      </div>
      <main>
        <section className='section-2' id='listing'>
          <h1 className='section-2-h1' data-aos="fade-up">Used Cars By Body Type</h1>
          <div className='card'>
            {
              product.map((item)=>{
                return(
                  <div className='cards' key={item.id}>
                    <img className='cards-img' src={item.imgUrl} alt="" />
                    <h2 className='cards-name'>{item.name}</h2>
                    <b className='cards-price'>{item.price}</b><br />
                    <i className='cards-year'>Year: {item.year}</i><br />
                    <Link className='cardsLink' to={`/car/${item.id}`}><button className='cardsBtn'>View all <img className='next-img' src="../next.png" alt="" /></button></Link>
                  </div>
                )
              })
            }
          </div>
        </section>
        <section className='section-3'>
          <h1 className='section-3-h1' data-aos="fade-up">What would you like to find?</h1>
          <div className="animation">
            <div className="animation-w">
              <div className="animation-track">
                <div className="animation-card"><img src="../range.png" /><p className='car-name'>Land Rover</p></div>
                <div className="animation-card"><img src="../kia.png" /><p className='car-name'>KIA</p></div>
                <div className="animation-card"><img src="../nissan.png" /><p className='car-name'>Nissan</p></div>
                <div className="animation-card"><img src="../ford.png" /><p className='car-name'>Ford</p></div>
                <div className="animation-card"><img src="../jeep.png" /><p className='car-name'>Jeep</p></div>
                <div className="animation-card"><img src="../bmw.png" /><p className='car-name'>BMW</p></div>

                <div className="animation-card"><img src="../range.png" /><p className='car-name'>Land Rover</p></div>
                <div className="animation-card"><img src="../kia.png" /><p className='car-name'>KIA</p></div>
                <div className="animation-card"><img src="../nissan.png" /><p className='car-name'>Nissan</p></div>
                <div className="animation-card"><img src="../ford.png" /><p className='car-name'>Ford</p></div>
                <div className="animation-card"><img src="../jeep.png" /><p className='car-name'>Jeep</p></div>
                <div className="animation-card"><img src="../bmw.png" /><p className='car-name'>BMW</p></div>

                <div className="animation-card"><img src="../range.png" /><p className='car-name'>Land Rover</p></div>
                <div className="animation-card"><img src="../kia.png" /><p className='car-name'>KIA</p></div>
                <div className="animation-card"><img src="../nissan.png" /><p className='car-name'>Nissan</p></div>
                <div className="animation-card"><img src="../ford.png" /><p className='car-name'>Ford</p></div>
                <div className="animation-card"><img src="../jeep.png" /><p className='car-name'>Jeep</p></div>
                <div className="animation-card"><img src="../bmw.png" /><p className='car-name'>BMW</p></div>
              </div>
            </div>
          </div>
        </section>
        <section className='section-4' id='swippers'>
          <h1 className='sec-4-h1' data-aos="fade-up">Swipper cars</h1>
          <Swiper 
        spaceBetween={50}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img className='swipper-img' src="https://static.life.ru/posts/2017/04/997761/fcab17c5647772067c5ef083e90099b8.jpeg" alt="" /></SwiperSlide>
        <SwiperSlide><img className='swipper-img' src="https://a.d-cd.net/yVKHfmKJODgU1DiX8Bubm6JsP0U-1920.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className='swipper-img' src="https://i.ytimg.com/vi/PKfOnU9e_8g/maxresdefault.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className='swipper-img' src="https://i.ytimg.com/vi/PdNbNLynhPg/maxresdefault.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className='swipper-img' src="https://sun9-80.userapi.com/impg/yXdC2MJCiyE7AO9aBFFGLoEzaHNo-ZGTitk--w/gzW6F1x4WlI.jpg?size=1280x720&quality=95&sign=1ae5ec97eb9cf13f33cf77c85e42dc03&type=album" alt="" /></SwiperSlide>
      </Swiper>
        </section>
        <section className='section-5' id='pages'>
          <h1 className='sec-5-h1' data-aos="fade-up">Find your dream car easily and quickly</h1>
          <p className='sec-5-p-w' data-aos="fade-up">Browse thousands of new and used cars from all reputable brands on the market.</p>
          <div className="section-5-div">
            <div className="section-5-div-w">
              <img className='section-5-img' src="../1.png" alt="" />
              <h2 className='sec-5-h2'>Browse inventory</h2>
              <p className='sec-5-p'>Find the ideal car for you and browse our affordable inventory.</p>
              <button className='sec-5-btn' onClick={()=> setBrowse(true)}>Search invertory</button>
              {browse && <Browse setBrowse={setBrowse}/>}
            </div>
            <div className="section-5-div-w">
              <img className='section-5-img' src="../2.png" alt="" />
              <h2 className='sec-5-h2'>Get An Offer</h2>
              <p className='sec-5-p'>What's your car worth? Get the best value for your vehicle.</p>
              <button className='sec-5-btn' onClick={()=> setOffer(true)}>Get trade-in Value</button>
              {offer && <Offer setOffer={setOffer}/>}
            </div>
            <div className="section-5-div-w">
              <img className='section-5-img' src="../3.png" alt="" />
              <h2 className='sec-5-h2'>Apply For Financing</h2>
              <p className='sec-5-p'>Fill out our credit approval form for your next used vehicle loan.</p>
              <button className='sec-5-btn' onClick={()=> setApply(true)}>Apply Now</button>
              {aplly && <Apply setApply={setApply}/>}
            </div>
            <div className="section-5-div-w">
              <img className='section-5-img' src="../4.png" alt="" />
              <h2 className='sec-5-h2'>Expert Service</h2>
              <p className='sec-5-p'>Expert technicians will keep your vehicle in top running condition.</p>
              <button className='sec-5-btn' onClick={()=> setExpert(true)}>Schedule Service</button>
              {expert && <Expert setExpert={setExpert}/>}
            </div>
          </div>
        </section>
        <section className='section-6'>
          <div className="section-6-div-w">
            <div className="sec-6-all" data-aos="fade-right">
              <div className="left">
                <img className='mersfr' src="../mersfr.png" alt="" />
              </div>
              <div className="right">
                <h2 className='right-h2'>Are you looking for a car?</h2>
                <p className='right-p'>Save time and effort as you no longer need to visit multiple stores to find the right car.</p>
                <button className='right-btn'>Find cars <img className='icon-1' src="../1right.png" alt="" /></button>
              </div>
            </div>
            <div className="sect-6-all" data-aos="fade-left">
              <div className="left-1">
                <img className='bmwfr' src="../bmwfr.png" alt="" />
              </div>
              <div className="right-2">
                <h2 className='rig-2-h2'>Do you want to sell a car?</h2>
                <p className='rig-2-p'>Find your perfect car match and sell your car quickly with our user-friendly online service.</p>
                <button className='rig-2-btn'>Find cars <img className='icon-2' src="../sea.png" alt="" /></button>
              </div>
            </div>
          </div>
        </section>
        <section className='section-7'>
          <h1 className='section-7-h1' data-aos="fade-up">Search by body</h1>
          <div className="sec-7-w-g-a">
            <div className="sec-7-w-g-a-d">
              <div className="sec-7-w-g-a-d-t">
                <div className="w-card"><img className='w-img' src="../10.png" alt="" /> <p className='w-p'>Minivan</p></div>
                <div className="w-card"><img className='w-img' src="../11.png" alt="" /> <p className='w-p'>Sedan</p></div>
                <div className="w-card"><img className='w-img' src="../12.png" alt="" /> <p className='w-p'>Suv</p></div>
                <div className="w-card"><img className='w-img' src="../13.png" alt="" /> <p className='w-p'>Crossover</p></div>
                <div className="w-card"><img className='w-img' src="../14.png" alt="" /> <p className='w-p'>Coupe</p></div>
                <div className="w-card"><img className='w-img' src="../15.png" alt="" /> <p className='w-p'>Pickup Truck</p></div>
                <div className="w-card"><img className='w-img' src="../16.png" alt="" /> <p className='w-p'>MVP</p></div>

                <div className="w-card"><img className='w-img' src="../10.png" alt="" /> <p className='w-p'>Minivan</p></div>
                <div className="w-card"><img className='w-img' src="../11.png" alt="" /> <p className='w-p'>Sedan</p></div>
                <div className="w-card"><img className='w-img' src="../12.png" alt="" /> <p className='w-p'>Suv</p></div>
                <div className="w-card"><img className='w-img' src="../13.png" alt="" /> <p className='w-p'>Crossover</p></div>
                <div className="w-card"><img className='w-img' src="../14.png" alt="" /> <p className='w-p'>Coupe</p></div>
                <div className="w-card"><img className='w-img' src="../15.png" alt="" /> <p className='w-p'>Pickup Truck</p></div>
                <div className="w-card"><img className='w-img' src="../16.png" alt="" /> <p className='w-p'>MVP</p></div>

                <div className="w-card"><img className='w-img' src="../10.png" alt="" /> <p className='w-p'>Minivan</p></div>
                <div className="w-card"><img className='w-img' src="../11.png" alt="" /> <p className='w-p'>Sedan</p></div>
                <div className="w-card"><img className='w-img' src="../12.png" alt="" /> <p className='w-p'>Suv</p></div>
                <div className="w-card"><img className='w-img' src="../13.png" alt="" /> <p className='w-p'>Crossover</p></div>
                <div className="w-card"><img className='w-img' src="../14.png" alt="" /> <p className='w-p'>Coupe</p></div>
                <div className="w-card"><img className='w-img' src="../15.png" alt="" /> <p className='w-p'>Pickup Truck</p></div>
                <div className="w-card"><img className='w-img' src="../16.png" alt="" /> <p className='w-p'>MVP</p></div>
              </div>
            </div>
          </div>
        </section>
        <section className='section-8'>
          <h1 className='sec-8-h1' data-aos="fade-up">Car reviews</h1>
          <div className="sec-8-rendering">
            <div className="sec-8-rendering-w">
              <h1 className='sec-8-ren-h1' data-aos="fade-up">2024 BYD Champion Premium Rewiev</h1>
              <p className='sec-8-ren-p' data-aos="fade-up">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione beatae, obcaecati tempora nulla odit nihil?</p>
              <button className='sec-8-ren-btn' data-aos="fade-up">Review detail</button>
            </div>
          </div>
        </section>
        <section className='section-9' id='blogs'>
          <h1 className='sec-9-h1' data-aos="fade-up">News to help choose your car</h1>
          <div className="auto-name-global">
            <div className="auto-name-global-l" data-aos="fade-up-right">
              <img className='global-img' src="../haval.webp" alt="" />
              <h1 className='global-h1'>Get Ready For A Diesel Mild-Hybrid Toyota Fortuner In...</h1>
              <p className='global-p'>The sub-4 metre SUV segment has been quite active over the last six months or so, with the launch of various facelifted...</p>
            </div>
            <div className="auto-name-global-l" data-aos="fade-up">
              <img className='global-img' src="../ev9.jpg" alt="" />
              <h1 className='global-h1'>Get Ready For A Diesel Mild-Hybrid Toyota Fortuner In...</h1>
              <p className='global-p'>The sub-4 metre SUV segment has been quite active over the last six months or so, with the launch of various facelifted...</p>
            </div>
            <div className="auto-name-global-l" data-aos="fade-up-left">
              <img className='global-img' src="../file.avif" alt="" />
              <h1 className='global-h1'>Get Ready For A Diesel Mild-Hybrid Toyota Fortuner In...</h1>
              <p className='global-p'>The sub-4 metre SUV segment has been quite active over the last six months or so, with the launch of various facelifted...</p>
            </div>
          </div>
        </section>
        <section className='section-10'>
          <h1 className='sec-10-h1' data-aos="fade-up">Our partners</h1>
          <div className="passing-get-let">
            <div className="passing-get-let-w">
              <div className="passing-get-let-w-h">
                <div className="passing-card"><img className='passing-img' src="../20.png" alt="" /></div>
                <div className="passing-card"><img className='passing-img' src="../21.png" alt="" /></div>
                <div className="passing-card"><img className='passing-img' src="../22.png" alt="" /></div>
                <div className="passing-card"><img className='passing-img' src="../23.png" alt="" /></div>
                <div className="passing-card"><img className='passing-img' src="../24.png" alt="" /></div>
                <div className="passing-card"><img className='passing-img' src="../25.png" alt="" /></div>

                <div className="passing-card"><img className='passing-img' src="../20.png" alt="" /></div>
                <div className="passing-card"><img className='passing-img' src="../21.png" alt="" /></div>
                <div className="passing-card"><img className='passing-img' src="../22.png" alt="" /></div>
                <div className="passing-card"><img className='passing-img' src="../23.png" alt="" /></div>
                <div className="passing-card"><img className='passing-img' src="../24.png" alt="" /></div>
                <div className="passing-card"><img className='passing-img' src="../25.png" alt="" /></div>

                <div className="passing-card"><img className='passing-img' src="../20.png" alt="" /></div>
                <div className="passing-card"><img className='passing-img' src="../21.png" alt="" /></div>
                <div className="passing-card"><img className='passing-img' src="../22.png" alt="" /></div>
                <div className="passing-card"><img className='passing-img' src="../23.png" alt="" /></div>
                <div className="passing-card"><img className='passing-img' src="../24.png" alt="" /></div>
                <div className="passing-card"><img className='passing-img' src="../25.png" alt="" /></div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <div className="footer-one-div-a">
          <div className="footer-one-div-a-into">
            <div className="left-10">
              <img className='footer-one-div-a-into-img' src="../a.png" alt="" />
            </div>
            <div className="right-10">
              <h4 className='footer-one-div-a-into-h4'>Top 1 Americas</h4>
              <p className='footer-one-div-a-into-p'>Largest Auto portal</p>
            </div>
          </div>

          <div className="footer-one-div-a-into">
            <div className="left-10">
              <img className='footer-one-div-a-into-img' src="../b.png" alt="" />
            </div>
            <div className="right-10">
              <h4 className='footer-one-div-a-into-h4'>Car sold</h4>
              <p className='footer-one-div-a-into-p'>Every 5 minuts</p>
            </div>
          </div>

          <div className="footer-one-div-a-into">
            <div className="left-10">
              <img className='footer-one-div-a-into-img' src="../c.png" alt="" />
            </div>
            <div className="right-10">
              <h4 className='footer-one-div-a-into-h4'>Offers</h4>
              <p className='footer-one-div-a-into-p'>Stay updated pay less</p>
            </div>
          </div>

          <div className="footer-one-div-a-into">
            <div className="left-10">
              <img className='footer-one-div-a-into-img' src="../d.png" alt="" />
            </div>
            <div className="right-10">
              <h4 className='footer-one-div-a-into-h4'>Compare</h4>
              <p className='footer-one-div-a-into-p'>Decode the right car</p>
            </div>
          </div>
        </div>
        <hr />
        <div className="footer-pas-hr-a-ab">
          <div className="footer-pas-hr-a-abc-into-1">
            <h1 className='footer-pas-hr-a-abc-into-h1'>About Auto Decar</h1>
            <p className='footer-pas-hr-a-abc-into-p'>About us</p>
            <p className='footer-pas-hr-a-abc-into-p'>Careers With Us</p>
            <p className='footer-pas-hr-a-abc-into-p'>Terms & Conditions</p>
            <p className='footer-pas-hr-a-abc-into-p'>+55 002 30 62</p>
            <p className='footer-pas-hr-a-abc-into-p'>Los Angles</p>
            <p className='footer-pas-hr-a-abc-into-p'>FAQs</p>
          </div>

          <div className="footer-pas-hr-a-abc-into-2">
            <h1 className='footer-pas-hr-a-abc-into-h1'>Popular used car</h1>
            <p className='footer-pas-hr-a-abc-into-p'>Chevrolet</p>
            <p className='footer-pas-hr-a-abc-into-p'>Land Rover</p>
            <p className='footer-pas-hr-a-abc-into-p'>Tesla</p>
            <p className='footer-pas-hr-a-abc-into-p'>Volkswagen</p>
            <p className='footer-pas-hr-a-abc-into-p'>BMW</p>
            <p className='footer-pas-hr-a-abc-into-p'>Mercedes benz</p>
          </div>

          <div className="footer-pas-hr-a-abc-into-3">
            <h1 className='footer-pas-hr-a-abc-into-h1'>Other</h1>
            <p className='footer-pas-hr-a-abc-into-p'>How it work</p>
            <p className='footer-pas-hr-a-abc-into-p'>Terms and Conditions</p>
            <p className='footer-pas-hr-a-abc-into-p'>Privacy Policy</p>
            <p className='footer-pas-hr-a-abc-into-p'>Copyrights</p>
            <p className='footer-pas-hr-a-abc-into-p'>Help center</p>
            <p className='footer-pas-hr-a-abc-into-p'>Car sales trends</p>
          </div>

          <div className="footer-pas-hr-a-abc-into-4">
            <h1 className='footer-pas-hr-a-abc-into-h1'>Newsletter</h1>
            <p className='footer-pas-hr-a-abc-into-p-land'>Stay on top of the latest car trends, tips, and tricks for selling your car.</p>
            <input className='footer-pas-hr-a-abc-into-inp' placeholder='Your email addres' type="text" /> <br /><br />
            <button className='footer-pas-hr-a-abc-into-btn'>Send</button>
          </div>
        </div>
        <hr />
        <div className="footer-landing-a-l">
          <div className="footer-landing-a-l-1">
            <img src="../logo.png" alt="" />
          </div>
          <div className="footer-landing-a-l-2">
            <p className='rights'>© 2024 Auto Decar. All rights reserved</p>
            <a href="https://www.instagram.com/" target='blank'><img src="../insta.png" alt="" /></a>
            <a href="https://www.youtube.com/" target='blank'><img src="../you.png" alt="" /></a>
          </div>
        </div>
      </footer>
    </div>
  )
}
