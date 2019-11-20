import React,{useEffect} from 'react'
import axios from 'axios'
import AxiosWithAuth from '../Utils/AxiosWithAuth'

const RoomInfo = () => {

    useEffect(() =>{
        AxiosWithAuth()
        .get(`${process.env.REACT_APP_API_URL}/api/adv/init/`)
        .then(res => {
            console.log('res',res)
        })
        .err(err=> {
            console.log(err)
        })
        
    }, [])

    return(
        <div>
            {/* <p>{res.data.roomname}</p> */}
        </div>
    )
}


export default RoomInfo