import React, { useEffect, useContext, useState } from 'react'
import AppBar from '../../Components/AppBar/AppBar'
import './Orders.css'
import { PostService } from '../../services'
import { UserContext } from '../../App'
import Seperator from '../../Components/Seperator'
import Display from '../../Components/Display'

const Orders = () => {

  // const { state, dispatch } = useContext(UserContext)
  // const { userData, token } = state
  let userData = JSON.parse(localStorage.getItem('userData'))
  let token = localStorage.getItem('user')



  const [post, setPost] = useState([])



  const fetchData = async () => {
    const result = await PostService.myPost(userData?._id, token)
    console.log(result);
    if (result) {

      setPost(result?.data)
    }

  }


  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className='Orders_container'>
      <AppBar />
      <div className='orders_content' >
        {
          post?.length > 0 ?
          <div>
            {
          post.map((obj, i) => {
            return (
              <div key={i} className='orders_list'>
                <div style={{ padding: '5px 20px 5px 20px' }} ><h6>{obj.date ? obj.date : '15/01/2023'}</h6></div>
                <div style={{display:'flex',justifyContent:'space-between'}}>
                  <div className='margin padding'>
                    <h6>{obj.mobile + obj.model}</h6>
                    <p>{obj.problem}</p>
                  </div>
                  <div>{obj?.amount ? obj?.amount : null}</div>
                </div>
                <div style={{display:'flex',justifyContent:'flex-end',padding:'0 40px 0 40px'}} >{obj?.status}</div>

                <Seperator height={Display.setHeight(1)} />
              </div>
            )
          })
        } 
          </div>
        :
        <div>
          no post found
        </div>
        }
      </div>

    </div>
  )
}

export default Orders