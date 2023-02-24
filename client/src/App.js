import React, { useState, useEffect, createContext, useReducer, useContext } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import { useHistory } from 'react-router-dom'
import Login from './Pages/Login/Login';
import DashBoard from './Pages/Dashboard/DashBoard';
import UserDetails from './Pages/UserDetails/UserDetails';
import OtpScreen from './Pages/OTPScreen/OtpScreen';
import Home from './Pages/Home/Home';
import { GeneralReducer, initialState } from "./Components/reducers/GeneralReducers"
import Orders from './Pages/Orders/Orders';
import Settings from './Pages/Settings/Settings';

export const UserContext = createContext()

const Routing = ()=>{
  const history = useHistory()
  const {state,dispatch} = useContext(UserContext)
  useEffect(()=>{
    const user = localStorage.getItem('user')
   
    if(user){
      dispatch({type:'TOKEN',payload:user})
    }
    else{

      history.push('/')
    }
  },[])
  return(
    <Switch>
      <Route path='/home' ><Home /></Route>
      <Route path='/orders' ><Orders/></Route>
      <Route path='/settings' ><Settings/></Route>
      
    </Switch>
  )
}
function App() {


  const [state, dispatch] = useReducer(GeneralReducer, initialState)
useEffect(()=>{
  const userDatas = localStorage.getItem('userData')
  if(userDatas){
    dispatch({ type:'USER_DATA', payload:JSON.parse(userDatas) })
  }
},[])
  return (
    <div className="App" >
      <UserContext.Provider value={{ state, dispatch }} >
        <Router>
          <Routing/>
          <Switch>
            <Route exact path='/' ><DashBoard /></Route>
            <Route path='/login' ><Login /></Route>
            <Route path='/user'><UserDetails /></Route>
            <Route path='/otp'><OtpScreen /></Route>
            
          </Switch>

        </Router>
      </UserContext.Provider>

    </div>
  );
}

export default App;
