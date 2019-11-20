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

   const move = e => {
        const token = localStorage.getItem('key')

        const movement = {
            direction : e
        }

        axios
        .post(`${process.env.REACT_APP_API_URL}/api/adv/move`, movement, {
            headers:{
                Authorization: `Token ${token} `
            }
        })
        .then(res =>{
            console.log('move response', res)
            setInfo(res.data)
        })
    }

    return(
        <div>
            <p>{info.title}</p>
            <p>{info.description}</p>
            {/* {info.players.map(player =>{
                return player
            })} */}
        <div>
            <h2>Directions</h2>
            <button onClick={move('n')}>North</button>
            <button onClick={move('s')}>South</button>
            <button onClick={move('e')}>East</button>
            <button onClick={move('w')}>West</button>
        </div>
        </div>
    )
}


export default RoomInfo