const BACKEND_BASE_URL = 'http://ec2-54-159-166-105.compute-1.amazonaws.com:3000'


const BACKEND_API = {
    BASE_API_URL : `${BACKEND_BASE_URL}/api`,
    REGISTER:'/register',
    LOGIN:'/login',
    OTP:'/otp',
    USER_NAME_UPDATE:'/userUpdate',
    USER:'/user',
    REFRESH_TOKEN:'/refresh-token',
    POST:'/post'
}

export default {BACKEND_API}