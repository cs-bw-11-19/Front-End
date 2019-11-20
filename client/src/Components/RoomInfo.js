import React,{useEffect} from 'react'
import axios from 'axios'
import AxiosWithAuth from '../Utils/AxiosWithAuth'

const RoomInfo = () => {
    const [info, setInfo] = useState([]);

    useEffect(() =>{
        AxiosWithAuth()
        .get(`${process.env.REACT_APP_API_URL}/api/adv/init/`)
        .then(res => {
            console.log('res',res)
        })
        setInfo(res.data)
    }, [])

    return(
        <div>
            {/* <p>{info.roomname}</p> */}
        </div>
    )
}


export default RoomInfo