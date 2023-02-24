import React,{useState} from 'react'
import {useHistory} from 'react-router-dom'
import AppBar from '../../Components/AppBar/AppBar'
import './Login.css'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Seperator from '../../Components/Seperator'
import Display from '../../Components/Display';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import gmail from '../../images/mail.png'
import smartPhone from '../../images/smartphone.png'
import AuthenticationService from '../../services/AuthenticationService'

const Login = () => {

    const [activeTab,setActiveTab] = useState(1)
    const [email,setEmail] = useState('')
    const [phone,setPhone] = useState('')
    const [isLoading,setIsLoading] = useState(false)
    const history = useHistory()

    const emailLogin = async ()=>{
        setIsLoading(true)
        let user = {
            email
        }
        const userLogin = await AuthenticationService.emailLogin(user)
        if( userLogin?.status && !userLogin?.name){
            setIsLoading(false)
            history.push('/user',{email:email})
        }else if(userLogin?.status) {
            setIsLoading(false)
            history.push('/otp',{email:email})
        }else{
            setIsLoading(false)
            console.log('something went wrong');
        }
    }

    const phLogin = async() => {
        setIsLoading(true)
        let user = {
         phone
        }
       if(phone.length === 10){
        const userLogin = await AuthenticationService.mobileLogin(user)
        console.log(userLogin);
       if( userLogin?.status && !userLogin?.name){
        setIsLoading(false)
        history.push('/user',{phone:phone})
       }else if(userLogin?.status) {
        setIsLoading(false)
        history.push('/otp',{phone:phone})
       }else{
        setIsLoading(false)
        console.log('something went wrong');
       }
       }else{
        setIsLoading(false)
        console.log('please enter 10 digit number');
       }
      }
  return (
    <div className='login_container' >
        <div style={{width:'100%',height:'70px',display:'flex',backgroundColor:'whitesmoke',alignItems:'center',justifyContent:'center',padding:'0 0 0 50px'}} >
            <div style={{position:'absolute',left:30}} ><ArrowBackIcon/></div>
            <div>Login</div>
        </div>
        <Seperator height={Display.setHeight(8)} />
        <div style={{display:'flex',flexDirection:'column',alignItems:'center',height:Display.setHeight(80)}}>
            <div style={{backgroundColor:'whitesmoke',height:Display.setHeight(60),width:400,borderRadius:25,boxShadow:'1px 2px 10px black'}} >
                
                <div className='top-panel' >
                    <div className={activeTab === 1 ?'email-login bg-white' : 'email-login'} onClick={()=>setActiveTab(1)}>
                        Login with email
                    </div>
                    
                    <div className={activeTab === 2 ?'phone-login bg-white' : 'phone-login'} onClick={()=>setActiveTab(2)}>
                        Login with phone
                    </div>
                </div>
                <div className='tab-content' >
                    <Seperator height={Display.setHeight(2)} />
                    <div className={activeTab === 1 ? 'emaillogin-content': 'off'} onClick={()=>setActiveTab(1)}>
                        <Seperator height={Display.setHeight(2)} />
                        <img style={{height:80}} src={gmail} alt="" />
                        <h5>Enter your Email Address</h5>
                        <p>We will send you a verification code on this email</p>
                        <TextField sx={{width:350}} id="outlined-basic" label="Email" variant="outlined" onChange={(e)=>setEmail(e.target.value)} />
                        <Seperator height={Display.setHeight(8)} />
                        <Button variant="contained" size="medium" onClick={()=>emailLogin()}> Get OTP</Button>
                    </div>
                    <div className={activeTab === 2 ? 'phonelogin-content' : 'off'} onClick={()=>setActiveTab(2)} >
                    <Seperator height={Display.setHeight(2)} />
                        <img style={{height:80}} src={smartPhone} alt="" />
                        <h5>Enter your Phone Number</h5>
                        <p>We will send you a verification code on your number</p>
                        <TextField sx={{width:350}} id="outlined-basic" label="Phone Number" variant="outlined" onChange={(e)=>setPhone(e.target.value)} />
                        <Seperator height={Display.setHeight(8)} />
                        <Button variant="contained" size="medium" onClick={()=>phLogin()}> Get OTP</Button>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Login