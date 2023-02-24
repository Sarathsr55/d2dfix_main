import React from 'react'
import './About.css'
import animation from '../../images/animation.gif'

const About = () => {
  return (
    <div className='about-container' id='AboutUs' >
        <div className="about-topborder">
            
        </div>
        <div className="about-page">
        <div className="about-heading">
          <h1>Let's introduce Ourself</h1>
        </div>
       <div className='about-content' >
        <div>
          <img className='animation-img' src={animation} alt="" />
        </div>
        <div className='about-us' >
          <h5>D2D Fix is a Mobile Service Centre providing services in Display replacement, screen replacement, Battery issues in a very less budget. our Aim is to providing a good service and making it in an affordable price for you.
          We assuring Quality product and services to our customer and our staffs are very friendly. We have a wide range of products and do Services with the requirements of customers.</h5>
        </div>
        </div>
       </div>
        
    </div>
  )
}

export default About