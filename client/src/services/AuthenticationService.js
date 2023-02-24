import axios from "axios"
import ApiConstants from "../Constants/ApiConstants"
import { useContext } from "react"



const AuthRequest = axios.create({
    baseURL : ApiConstants.BACKEND_API.BASE_API_URL
})


const emailLogin = async (user) =>{
    if(!user?.email){
        return {status: false, message:'please enter an email address'}
    }
    try {
        let requstBody = {
            email: user?.email
        }
        let loginResponse = await AuthRequest.post(ApiConstants.BACKEND_API.REGISTER,requstBody)
        console.log(loginResponse);
        if(loginResponse?.data.status){
            let otpResponse = await AuthRequest.post(ApiConstants.BACKEND_API.OTP,requstBody)
        }
        return (loginResponse?.data)
    } catch (error) {
        console.log(`error occur due to ${error}`);
    }
}

const mobileLogin = async (user) =>{
    console.log(user);
    if(!user?.phone){
        return {status: false, message:'Please enter a valid phonenumber'}
    }
    try {
        let requstBody = {
            phone : user?.phone
        }
        let loginResponse = await AuthRequest.post(ApiConstants.BACKEND_API.REGISTER,requstBody)
        if(loginResponse?.data.status){
            let otpResponse = await AuthRequest.post(ApiConstants.BACKEND_API.OTP,requstBody)
            console.log(otpResponse);
        }
        console.log(loginResponse?.data);
        return (loginResponse?.data)
    } catch (error) {
        console.log(`error occur due to ${error}`);
    }
}

const resendOTP = async(user)=>{
    console.log(user);
    if(user?.email){
            try {
                let requstBody = {
                    email: user?.email
                }
                let otpResponse = await AuthRequest.post(ApiConstants.BACKEND_API.OTP,requstBody)
            } catch (error) {
                console.log(`error occur due to ${error}`);
            }
    }else{
        try {
            let requestBody = {
                phone: user?.phone
            }
            let otpResponse = await AuthRequest.post(ApiConstants.BACKEND_API.OTP,requestBody)
        } catch (error) {
            console.log(`error occur due to ${error}`);
        }
    }
}

const userNameUpdate = async(user)=>{
    if(user?.email){
        try {
            let requstBody = {
                email:user?.email,
                name:user?.name
            }
            let updateResponse = await AuthRequest.post(ApiConstants.BACKEND_API.USER_NAME_UPDATE,requstBody)
            
            return updateResponse
        } catch (error) {
            console.log(error);
        }
    }else if(user?.phone){
        try {
            let requstBody = {
                phone:user?.phone,
                name:user?.name
            }
            let updateResponse = await AuthRequest.post(ApiConstants.BACKEND_API.USER_NAME_UPDATE,requstBody)
            
            return updateResponse
        } catch (error) {
            console.log(error);
        }
    }
    
}

const otpVerification = async (user)=>{
    if(!user?.password){
        return {status: false, message:'please enter a valid code'}
    }
    if(user?.email){
        try {
            let requstBody = {
                email:user?.email,
                password:user?.password
            }
            let verification = await AuthRequest.post(ApiConstants.BACKEND_API.LOGIN,requstBody)
            console.log(verification);
            return verification.data
        } catch (error) {
            console.log(error);
        }
    }else{
        try {
            let requestBody = {
                phone: user?.phone,
                password: user?.password
            }
            let verification = await AuthRequest.post(ApiConstants.BACKEND_API.LOGIN,requestBody)
            console.log(verification);
            return verification.data
        } catch (error) {
            console.log(error);
        }
    }
}
const refreshToken = async(token)=>{
    try {
       console.log('token refreshing');
       let requestBody={}
       const tokenResponse = await axios.post('http://ec2-54-159-166-105.compute-1.amazonaws.com:3000/api/refresh-token',requestBody,{
        headers:{
            Authorization: `Bearer ${token}`
        }
       })
       if(tokenResponse){
        console.log(tokenResponse?.data)
        return {
            status: true,
            message:'token refreshed successfully',
            data:tokenResponse?.data
        }
       }else{
        return {
            status:false,
            message:'error in refreshing token'
        }
       }
    } catch (error) {
        console.log(` error due to : ${error}`)
    }
}

export default {emailLogin, otpVerification,userNameUpdate,refreshToken,resendOTP,mobileLogin}