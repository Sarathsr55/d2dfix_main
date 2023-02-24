import {ApiConstants} from '../Constants'
import axios from 'axios'
import React,{ useContext } from 'react'
// import { getToken, UserContext } from '../../App'
import StorageService from './StorageService'





const getUserData = async(token,email)=>{
    
    console.log(`UserService | getUserData`)
    try {
        let userResponse = await axios.get(`http://ec2-54-159-166-105.compute-1.amazonaws.com:3000/api/user/get-user/${email}`,{
            headers:{
                Authorization: `Bearer ${token}`
            }
        })
        if(userResponse?.status){
            console.log("success");
            return{
                status: true,
                message: 'User Data fetched',
                data: userResponse?.data
            }
        }
        else{
            console.log('failed');
            return{
                status: false,
                message: 'User Data not found'
            }
        }
    } catch (error) {
        console.log(`error : ${error?.message}`);
        return{
            status: false,
            message: 'TokenExpiredError',
            error:'TokenExpiredError'
        }
    }
}
const getUser = async(token,phone)=>{
    try {
        let userResponse = await axios.get(`http://ec2-54-159-166-105.compute-1.amazonaws.com:3000/api/user/get_user/${phone}`,{
            headers:{
                Authorization: `Bearer ${token}`
            }
        })
        if(userResponse?.status){
            console.log("success");
            return{
                status: true,
                message: 'User Data fetched',
                data: userResponse?.data
            }
        }
        else{
            console.log('failed');
            return{
                status: false,
                message: 'User Data not found'
            }
        }
    } catch (error) {
        return{
            status: false,
            message: 'TokenExpiredError',
            error:'TokenExpiredError'
        }
    }
}


export default {getUserData,getUser}