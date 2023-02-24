import React from 'react'
import Copyright from '../Copyright/Copyright'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer-container' >
        <div className="foot">
            <div className="about-foot">
            <div className='about-heading' >ABOUT</div>
            <div className='about-content' >
                <h6>
                D2D Fix is a Mobile Service Centre providing services in Display replacement, screen replacement, Battery issues in a very less budget. our Aim is to providing a good service and making it in an affordable price for you.
                We assuring Quality product and services to our customer and our staffs are very friendly. We have a wide range of products and do Services with the requirements of customers.
                </h6>
            </div>
            </div>
            <div className="service-foot">
                <div className='service-heading' >SERVICES</div>
                <br />
                <div className='service-option' >
                    <div>Display Replacement</div>
                    <div>Touchscreen replacement</div>
                    <div>Battery issues</div>
                    <div>Chip level service</div>
                    <div>iPhone service</div>
                    <div>unlocking</div>
                    

                </div>
            </div>
            <div className="contact-foot">
                <div className='contact-heading' >CONTACT</div>
                <br />
                <div className='contact-option' >
                    
                    <div>dtwodfix@gmail.com</div>
                    <div>9656990862</div>
                </div>
            </div>
        </div>
        <Copyright/>
    </div>
  )
}

export default Footer