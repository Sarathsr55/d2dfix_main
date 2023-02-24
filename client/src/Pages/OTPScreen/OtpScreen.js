import React, { useState, useEffect,useContext } from 'react'
import { useLocation,useHistory } from 'react-router-dom'
import './OtpScreen.css'
import { UserContext } from '../../App'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Seperator from '../../Components/Seperator';
import Display from '../../Components/Display';
import OTPInput, { ResendOTP } from "otp-input-react";
import Colors from '../../Constants/Colors'
import Button from '@mui/material/Button';
import { AuthenticationService, UserService } from '../../services'

const OtpScreen = () => {

    const history = useHistory()
    const location = useLocation()
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [code, setCode] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const {state,dispatch} = useContext(UserContext)

    useEffect(() => {
        const data = location.state
        if (data.email) {
            setEmail(data.email)
        } else {
            setPhone(data.phone)
        }
    }, [])

    const OTPCode = async () => {
        setIsLoading(true)
        let password = code

        if (email) {
            let user = {
                email,
                password
            }
            const loginVerification = await AuthenticationService.otpVerification(user)
            if (loginVerification?.status) {
                setIsLoading(false)
                localStorage.setItem('user', loginVerification?.data)
                localStorage.setItem('email', loginVerification?.email)
                dispatch({ type: 'EMAIL', payload: loginVerification?.email })
                const userData = await UserService.getUserData(loginVerification?.data, loginVerification?.email)
                console.log(userData);
                if (userData?.data?.status) {
                    localStorage.setItem('userData', JSON.stringify(userData?.data.data))
                    dispatch({ type: 'USER_DATA', payload: userData?.data?.data })
                    dispatch({ type: 'TOKEN', payload: loginVerification?.data })
                    history.push('/home')
                }

            } else {
                setIsLoading(false)
                // ToastAndroid.show('Invalid OTP',ToastAndroid.TOP,ToastAndroid.LONG)
                console.log('invalid otp');
            }


        } else {
            let user = {
                phone,
                password
            }
            const loginVerification = await AuthenticationService.otpVerification(user)
            if (loginVerification?.status) {
                setIsLoading(false)
                localStorage.setItem('user',loginVerification?.data)
                localStorage.setItem('phone',loginVerification?.phone)
                dispatch({ type: 'PHONE', payload: loginVerification?.phone })
                const userDatas = await UserService.getUser(loginVerification?.data, loginVerification?.phone)
                console.log(userDatas);
                if (userDatas?.data?.status) {
                    localStorage.setItem('userData',JSON.stringify(userDatas?.data.data))
                    dispatch({ type: 'USER_DATA', payload: userDatas?.data?.data })
                    dispatch({ type: 'TOKEN', payload: loginVerification?.data })
                    history.push('/home')
                }
            } else {
                setIsLoading(false)
                // ToastAndroid.show('Invalid OTP',ToastAndroid.TOP,ToastAndroid.LONG)
                console.log('invalid otp');
            }
        }
    }

    return (
        <div className='otp_container'>
            <div style={{ width: '100%', height: '70px', display: 'flex', backgroundColor: 'whitesmoke', alignItems: 'center', justifyContent: 'center', padding: '0 0 0 50px' }} >
                <div style={{ position: 'absolute', left: 30 }} ><ArrowBackIcon /></div>
                <div>OTP Verification</div>
            </div>
            <Seperator height={Display.setHeight(8)} />
            <div className='otpbox'>
                <Seperator height={Display.setHeight(5)} />
                <h5>OTP Verification</h5>
                <Seperator height={Display.setHeight(5)} />
                <p style={{ padding: '0 30px 0 30px' }} >Enter the OTP Verification code we have sent to {email ? email : phone} </p>
                <Seperator height={Display.setHeight(5)} />
                <div className='otp-group'>
                    <OTPInput inputStyles={{ height: 65, width: 45, marginRight: 10, borderColor: Colors.DEFAULT_GREEN }} value={code} onChange={setCode} autoFocus OTPLength={6} otpType="number" disabled={false} />
                    <Seperator height={Display.setHeight(3)} />
                    <ResendOTP style={{ height: 40, display: 'flex', justifyContent: 'space-evenly', width: '100%', alignItems: 'center' }} onResendClick={() => console.log("Resend clicked")} />
                    <Seperator height={Display.setHeight(8)} />
                    <Button variant="contained" onClick={() => OTPCode()} >Verify</Button>
                </div>
            </div>

        </div>
    )
}

export default OtpScreen