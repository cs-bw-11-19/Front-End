import React,{useEffect,useState} from 'react'
import axios from 'axios'
import AxiosWithAuth from '../Utils/AxiosWithAuth'

const RoomInfo = () => {
    const [info, setInfo] = useState([]);

    useEffect(() =>{
        const token = localStorage.getItem('key');
        axios
        .get(`${process.env.REACT_APP_API_URL}/api/adv/init/`,{
            headers:{
                Authorization: `Token ${token} `
            }
        })
        .then(res => {
            console.log('res',res)
            setInfo(res.data)
        })
    }, [])

    return(
        <div>
            <p>{info.title}</p>
            <p>{info.description}</p>
            {/* {info.players.map(player =>{
                return player
            })} */}
        </div>
    )
}


export default RoomInfo