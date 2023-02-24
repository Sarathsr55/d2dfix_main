import React from 'react'
import './Services.css'
import bs from '../../images/brokenscreen-icon.png'
import battery from '../../images/battery.png'
import location from '../../images/location.png'
import freeservice from '../../images/freeservice.png'

const Services = () => {
  return (
    
        <div className='servicepage-container' id='Services' >
        <div className='service-heading' >
            <h1>Our Features</h1>
        </div>
        <div className='service-container' >

            <div className="service-contents">
                <div style={{display:'flex',justifyContent:'center',width:'100%'}} >
                    <div className='service-icon'  >
                        <img style={{width:'160px',padding:'20px',display:'flex',alignItems:'center'}} src={bs} alt="" />
                        <h6>Screen replacement</h6>
                    </div>
                    <div className='service-icon'  >
                        <img style={{width:'160px',padding:'20px',display:'flex',alignItems:'center'}} src={battery} alt="" />
                        <h6>Battery Service</h6>
                    </div>
                </div>
                <div style={{display:'flex',justifyContent:'center',width:'100%'}} >
                    <div className='service-icon'  >
                        <img style={{width:'160px',padding:'20px',display:'flex',justifyContent:'center'}} src={location} alt="" />
                        <h6>Spot Service</h6>
                    </div>
                    <div className='service-icon'  >
                        <img style={{width:'160px',padding:'20px',display:'flex',justifyContent:'center'}} src={freeservice} alt="" />
                        <h6>No Extra cost</h6>
                    </div>
                </div>
            </div>
            

            <div className='service-quote' >
                
                    <h4>No Tension!</h4>
                    <h5>We resolve it infront of You...</h5>
                
            </div>

        </div>
    </div>
        
    
  )
}

export default Services