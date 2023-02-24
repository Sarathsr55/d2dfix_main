import React, { useEffect,useState } from 'react'
import './DashBoard.css'
import AppBar from '../../Components/AppBar/AppBar'
import Slider from '../../Components/ImageSlider/Slider';
import Services from '../../Components/Services/Services';
import About from '../../Components/About/About';
import Contact from '../../Components/Contact/Contact'
import Footer from '../../Components/Footer/Footer'
import Collections from '../../Components/Collections/Collections';


const DashBoard = () => {



  return (
    <div className='dash-container' id='Home'>
        <AppBar/>
        <Slider/>
        <Collections/>
        <Services/>
        <About/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default DashBoard