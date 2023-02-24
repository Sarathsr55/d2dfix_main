import React from 'react'
import './Contact.css'
import ContactIllustration from '../../images/5124556.png'
import phonelogo from '../../images/phone.png'
import maillogo from '../../images/gmail.png'
import addresslogo from '../../images/placeholder.png'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'

const Contact = () => {
  return (
    <div className='Contact-container' id='ContactUs' >
      <div className="contact-topborder">

      </div>
      <div className='Contact-heading' >
        <h1>Have Some Questions?</h1>
          <h6>Thank you for your interest in Our services. 
            Please fill out the form below or e-mail us at dtwodfix@gmail.com and we will get back to you.
          </h6>
      </div>
      <div className="contact-shape">
        <div className="contact-content">
          <div className='contact-info'>
            <img className='contact-illustration' src={ContactIllustration} alt="" />
            <h4>Get in touch</h4>
            <div style={{display:'flex',margin:'5px',paddingBottom:'25px',paddingTop:'25px'}} >
              <div style={{display:'flex',flexDirection:'column',alignItems:'flex-end'}} >
                <img style={{width:'25px',marginBottom:'5px'}} src={phonelogo} alt="" />
                <img style={{width:'25px',marginBottom:'5px'}} src={maillogo} alt="" />
                <img style={{width:'25px',marginBottom:'5px'}} src={addresslogo} alt="" />
              </div>
              <div style={{display:'flex',flexDirection:'column',alignItems:'flex-start',marginLeft:'10px'}} >
                <h6 style={{marginTop:'4px'}} >9656990862</h6>
                <h6 style={{marginTop:'4px'}} >dtwodfix@gmail.com</h6>
                <h6 style={{marginTop:'4px'}} >Karamana, Trivandrum</h6>
                
              </div>
            </div>
          </div>
          <div className='customer-details' >
          <div className="contactform">
            <TextField
              required
              id="outlined-required"
              label="Name"
              size='small'
              className='signintextfield'
            />

            <TextField
              required
              id="outlined-required"
              label="Phone number"
              size='small'
              className='signintextfield'
            />

            <TextField
              required
              id="outlined-required"
              label="Email Id"
              size='small'
              className='signintextfield'
            />
            <TextField
              required
              id="outlined-required"
              label="Message"
              multiline
              rows={5}
              size='larger'
              className='signintextfield'
            />

            <Button style={{backgroundColor:'#6c63ff',color:'aliceblue',fontSize:'large' }} color='primary' variant="contained"  >Send Message</Button>

            <Typography style={{display:'flex',justifyContent:'center',color:'#6c63ff'}} >Our technical team will contact you soon </Typography>

          </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Contact