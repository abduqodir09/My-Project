
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Contact from './components/Contact'
import Show from './components/Show'
import Aos from 'aos'
import { useEffect } from 'react'
import 'aos/dist/aos.css';
import Staff from './components/Staff'
import Listing from './components/Listing'
import Comments from './components/Comments'



function App() {

  useEffect(() => {
    Aos.init({
      duration: 1000, // animatsiya davomiyligi
      once: true, // faqat bir marta animatsiya qilish
    });
  }, []);

  useEffect(() => {
  // Aos.init();
  Aos.refresh(); // DOM o‘zgargan bo‘lsa kerak
}, []);
  return (
    <>
       <div>
    </div>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/car/:id' element={<Show/>}></Route>
      <Route path='/staffs' element={<Staff/>}></Route>
      <Route path='/listing' element={<Listing/>}></Route>
      <Route path='//comments' element={<Comments/>}></Route>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
