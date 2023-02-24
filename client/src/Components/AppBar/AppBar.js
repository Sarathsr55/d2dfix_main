import React,{useState} from 'react'
import './AppBar.css'
import {useHistory} from 'react-router-dom'
import d2dfixLogo from '../../images/D2DLogo1.png'
import Button from '@mui/material/Button';

const AppBar = () => {

  const history = useHistory()
  const token = localStorage.getItem('user')
  const [scrolled,setScrolled] = useState(false)
    const handleScroll = (event) =>{
      
      if(window.scrollY>=20){
        
        return setScrolled(true)
        
  
      }else if(window.scrollY<20) {
        
        return setScrolled(false)
      }    
    }
    
        window.addEventListener('scroll',handleScroll)

  return (
    <div id='AppBar' className={scrolled? 'appbar-containeroff' : 'appbar-container'}>

        <div className='res_appbar' >
          <div>
            <img className='cover_image' src={d2dfixLogo} alt="" />
          </div>
          <div>
            {
            !token?
            <Button onClick={()=>history.push('/login')} >Signup / Login</Button>
            :
            <div style={{display:'flex'}} >
              <Button onClick={()=>history.push('/home')} >Home</Button>
              <Button onClick={()=>history.push('/orders')} >My Orders</Button>
              <Button onClick={()=>{localStorage.clear(); history.push('/')}} >Logout</Button>
            </div>
          
          }
            
          </div>
        </div>

    </div>
  )
}

export default AppBar