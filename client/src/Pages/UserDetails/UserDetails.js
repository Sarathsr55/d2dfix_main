import React, { useState,useEffect } from 'react'
import { useHistory,useLocation } from 'react-router-dom'
import './UserDetails.css'
import D2dlogo from '../../images/D2dPlaystoreFeatureGraphics.png'
import TextField from '@mui/material/TextField';
import Seperator from '../../Components/Seperator';
import Display from '../../Components/Display';
import Button from '@mui/material/Button';
import { AuthenticationService} from '../../services'

const UserDetails = () => {

  const history = useHistory()
  const location = useLocation()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  useEffect(() => {
    const data = location.state
    console.log(data);
    if (data.email) {
      setEmail(data.email)
    } else {
      setPhone(data.phone)
    }
  }, [])

  const updateUser = async () => {
    if (phone) {
      console.log('i am there');
      const user = {
        phone,
        name
      }
      const upDateName = await AuthenticationService.userNameUpdate(user)
      console.log(upDateName);
      history.push('/otp', { phone: phone })


    } else {
      const user = {
        email,
        name
      }

      const upDateName = await AuthenticationService.userNameUpdate(user)
      console.log(upDateName);
      // history.push('/otp', { email: email })
    }
  }

  return (
    <div className='user_container' >
      <img style={{ height: 220, borderRadius: 50, borderWidth: '1px solid black' }} src={D2dlogo} alt="" />
      <Seperator height={Display.setHeight(10)} />
      <div>
        <h4>Enter Your Name</h4>
        <TextField value={name} onChange={(e) => setName(e.target.value)} id="outlined-basic" label="username" variant="outlined" />
      </div>

      <Button variant="contained" onClick={() => updateUser()} >Next</Button>

    </div>
  )
}

export default UserDetails