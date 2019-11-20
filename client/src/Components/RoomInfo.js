import React,{useEffect,useState} from 'react'
import axios from 'axios'
import AxiosWithAuth from '../Utils/AxiosWithAuth'
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/roominfo.css'

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
            console.log('players',res.data.players)
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
    if (!info.players){
        return(<p>Loading...</p>)
    }
    else 
    return(
        <div className ='room-container'>
            <div className='display'>
            <h4>Room</h4>
            <br></br>
            <p>{info.title}</p>
            <h4>Description</h4>
            <p>{info.description}</p>
            <h4>Other Players</h4>
            <p>{info.players.map(player =>{
                return <p>{player}</p>
            })}
            </p>
            </div>
        <div className='directions'>
            <h2>Directions</h2>
            <Button className= 'dirbutton' onClick={e => move('n')}>North</Button>
            <Button className= 'dirbutton' onClick={e => move('s')}>South</Button>
            <Button className= 'dirbutton' onClick={e => move('e')}>East</Button>
            <Button className= 'dirbutton' onClick={e =>  move('w')}>West</Button>
        </div>
        </div>
    )
}


export default RoomInfo