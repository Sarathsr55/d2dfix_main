import React, { useState, useEffect,useContext } from 'react'
import AppBar from '../../Components/AppBar/AppBar'
import Display from '../../Components/Display'
import Seperator from '../../Components/Seperator'
import './Home.css'
import CoverPhoto from '../../images/D2dPlaystoreFeatureGraphics.png'
import CoverLogo from '../../images/wefix-new.png'
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';
import {KeralaPlaces,MobileDetails} from '../../Constants'
import { UserContext } from '../../App'
import {PostService,UserService} from '../../services'

const Home = () => {

    const { state, dispatch } = useContext(UserContext)
    // const { userData, token, email } = state
    const userData = JSON.parse(localStorage.getItem('userData'))
    const token = localStorage.getItem('user')

    const [selectedBrand, setSelectedBrand] = useState('')
    const [selectedModel, setSelectedModel] = useState('')
    const [selectedProblem, setSelectedProblem] = useState('')
    const [phoneNo, setPhoneNo] = useState('')
    const [location, setLocation] = useState('')
    const [locations, setLocations] = useState([])
    const [brand, setBrand] = useState([])
    const [model, setModel] = useState([])
    const [district, setDistrict] = useState('Thiruvananthapuram')
    const [isLoading,setIsLoading] = useState(false)


    useEffect(() => {
        switch (district) {
            case 'Thiruvananthapuram':
                setLocations(KeralaPlaces.KERALA.THIRUVANANTHAPURAM)
                break;

            default:
                break;
        }
    }, [district])

    useEffect(() => {

        setBrand(MobileDetails.MOBILE_BRANDS)
    }, [])

    useEffect(() => {
        switch (selectedBrand) {
            case 'Apple':
                setModel(MobileDetails.MOBILE_MODELS.Apple)
                break;
            case 'Celkon':
                setModel(MobileDetails.MOBILE_MODELS.Celkon)
                break;
            case 'CoolPad':
                setModel(MobileDetails.MOBILE_MODELS.CoolPad)
                break;
            case 'Gionee':
                setModel(MobileDetails.MOBILE_MODELS.Gionee)
                break;
            case 'Google':
                setModel(MobileDetails.MOBILE_MODELS.Google)
                break;
            case 'Honor':
                setModel(MobileDetails.MOBILE_MODELS.Honor)
                break;
            case 'Huawei':
                setModel(MobileDetails.MOBILE_MODELS.Huawei)
                break;
            case 'Infinix':
                setModel(MobileDetails.MOBILE_MODELS.Infinix)
                break;
            case 'intex':
                setModel(MobileDetails.MOBILE_MODELS.intex)
                break;
            case 'IQOO':
                setModel(MobileDetails.MOBILE_MODELS.IQOO)
                break;
            case 'Itel':
                setModel(MobileDetails.MOBILE_MODELS.Itel)
                break;
            case 'Lava':
                setModel(MobileDetails.MOBILE_MODELS.Lava)
                break;
            case 'Lenovo':
                setModel(MobileDetails.MOBILE_MODELS.Lenovo)
                break;
            case 'LG':
                setModel(MobileDetails.MOBILE_MODELS.LG)
                break;
            case 'Micromax':
                setModel(MobileDetails.MOBILE_MODELS.Micromax)
                break;
            case 'Moto':
                setModel(MobileDetails.MOBILE_MODELS.Moto)
                break;
            case 'Nokia':
                setModel(MobileDetails.MOBILE_MODELS.Nokia)
                break;
            case 'NOTHING':
                setModel(MobileDetails.MOBILE_MODELS.NOTHING)
                break;
            case 'OnePlus':
                setModel(MobileDetails.MOBILE_MODELS.OnePlus)
                break;
            case 'Oppo':
                setModel(MobileDetails.MOBILE_MODELS.Oppo)
                break;
            case 'Panasonic':
                setModel(MobileDetails.MOBILE_MODELS.Panasonic)
                break;
            case 'Poco':
                setModel(MobileDetails.MOBILE_MODELS.Poco)
                break;
            case 'Realme':
                setModel(MobileDetails.MOBILE_MODELS.Realme)
                break;
            case 'Redmi':
                setModel(MobileDetails.MOBILE_MODELS.Redmi)
                break;
            case 'Samsung':
                setModel(MobileDetails.MOBILE_MODELS.Samsung)
                break;
            case 'Sony':
                setModel(MobileDetails.MOBILE_MODELS.Sony)
                break;
            case 'Vivo':
                setModel(MobileDetails.MOBILE_MODELS.Vivo)
                break;

            default:
                break;
        }
    }, [selectedBrand])

    let post = {
        mobile: selectedBrand,
        model: selectedModel,
        problem: selectedProblem,
        location: location,
        district: district,
        phone: phoneNo,
        postedBy: userData?._id,
        name: userData?.username,
        status: 'Order requested',
        amount: ''

    }
    const stateReset = () => {
        setSelectedBrand('')
        setSelectedModel('')
        setSelectedProblem('')
        setLocation('')
        setPhoneNo('')
    }

    const saveBtn = async () => {
        setIsLoading(true)
        if (!post.mobile) {
            setIsLoading(false)
            // Toast.show('Please Select the Brand of your Phone', Toast.LONG, Toast.TOP)
        }
        else if (!post.phone) {
            setIsLoading(false)
            // Toast.show('Please Enter your mobile Number', Toast.LONG, Toast.TOP)
        }
        else if (!post.location) {
            setIsLoading(false)
            // Toast.show('please enter your location', Toast.LONG, Toast.TOP)
        } else if (post.district !== 'Thiruvananthapuram') {
            setIsLoading(false)
            // Toast.show('Our Service is now available only on Thiruvananthapuram')
        }
        else {
            let postResponse = await PostService.createPost(post, token)
            console.log(postResponse);
            if (postResponse.status) {
                stateReset()
                setIsLoading(false)
                // Toast.show(postResponse?.message, Toast.LONG, Toast.TOP)


            } else {
                setIsLoading(false)
                return 'error occured'
            }
        }

    }

    return (
        <div className='home_container' >
            <AppBar />
            <div className='home_content'>
                <div className='cover_container' ><img className='cover_photo' src={CoverPhoto} alt="" /></div>
                <div className='homie' >
                    {/* <img style={{ height: 240 }} src={CoverLogo} alt="" /> */}
                    <h4>Repair Cell Phone at your Doorstep</h4>
                    <h5>Repairing both Android and iPhones</h5>
                    <p>Home Service | Pickup & Drop | Spot Service</p>
                    <p>Screen replacement (LED/LCD), TouchScreen change, Battery issues, All other issues</p>

                    <h5>Choose your Mobile Brand</h5>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={selectedBrand}
                        label="Brand"
                        onChange={(e) => setSelectedBrand(e.target.value)}
                        className='selectfield'
                    >
                        {
                            brand.map((obj,i)=>{
                                return <MenuItem key={i} value={obj}>{obj}</MenuItem>
                            })
                        }
                        
                    </Select>
                    <Seperator height={Display.setHeight(3)} />

                    <h5>Choose Model</h5>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={selectedModel}
                        label="Model"
                        onChange={(e) => setSelectedModel(e.target.value)}
                        className='selectfield'
                    >
                        {
                            model.map((obj,i)=>{
                                return <MenuItem key={i} value={obj}>{obj}</MenuItem>
                            })
                        }
                    </Select>
                    <Seperator height={Display.setHeight(3)} />

                    <h5>Choose your Problem</h5>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={selectedProblem}
                        label="Complaint"
                        onChange={(e) => setSelectedProblem(e.target.value)}
                        className='selectfield'
                    >
                        <MenuItem value={'Display Broken'}>Display Broken</MenuItem>
                        <MenuItem value={'Touch issue'}>Touch issue</MenuItem>
                        <MenuItem value={'Battery Problem'}>Battery Problem</MenuItem>
                        <MenuItem value={'Other problem'}>Other problem</MenuItem>
                    </Select>
                    <Seperator height={Display.setHeight(3)} />

                    <h5>Select your District</h5>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={district}
                        label="District"
                        onChange={(e) => setDistrict(e.target.value)}
                        className='selectfield'
                    >
                        <MenuItem value={'Thiruvananthapuram'}>Thiruvananthapuram</MenuItem>
                    </Select>
                    <Seperator height={Display.setHeight(3)} />

                    <h5>Enter your Location</h5>
                    <Autocomplete
                        id="free-solo-demo"
                        freeSolo
                        options={locations.map((option) => option)}
                        className='selectfield'
                        onChange={(event,value)=>setLocation(value)}
                        renderInput={(params) => <TextField {...params} label="Location" />}
                    />
                    <Seperator height={Display.setHeight(3)} />

                    <h5>Enter your Phone Number</h5>
                    <TextField value={phoneNo} onChange={(e)=>setPhoneNo(e.target.value)} className='selectfield' id="outlined-basic" label="Phone Number" variant="outlined" />
                    <Seperator height={Display.setHeight(10)} />

                    <Button onClick={()=>saveBtn()} variant="contained">Save</Button>
                    <Seperator height={Display.setHeight(15)} />
                </div>
            </div>
        </div>
    )
}

export default Home