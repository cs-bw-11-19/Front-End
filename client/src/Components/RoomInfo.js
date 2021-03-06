import React,{useEffect,useState} from 'react'
import axios from 'axios'
import AxiosWithAuth from '../Utils/AxiosWithAuth'
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/roominfo.css'
import Map from './Map'

const RoomInfo = () => {
    const [info, setInfo] = useState([]);

    useEffect(() =>{
        const token = localStorage.getItem('key');
        axios
        .get(`${process.env.REACT_APP_API_URL}/api/adv/init`,{
            headers:{
                Authorization: `Token ${token} `
            }
        })
        .then(res => {
            setInfo(res.data.room)
            localStorage.setItem('room',res.data.room.id)
        })
    }, [])

   const move = e => {
        const token = localStorage.getItem('key')

        const movement = {
            direction : e
        }
        // console.log('movement', movement)

        axios
        .post(`${process.env.REACT_APP_API_URL}/api/adv/move/`, movement, {
            headers:{
                Authorization: `Token ${token} `
            }
        })
        .then(res =>{
            setInfo(res.data)
        
            
            
        })
    }
    // console.log('room info',info.room)

    // const getRooms = () => {
    //     const token = localStorage.getItem('key')


    //     axios
    //     .get(`${process.env.REACT_APP_API_URL}/api/adv/rooms/`,  {
    //         headers:{
    //             Authorization: `Token ${token} `
    //         }
    //         })
    //     .then(res => {
    //         console.log('rooms',res)
    //     })
        // .error(err => {
        //     console.log(err)
        // })

    // }
    if (info.title=== undefined && info.id == undefined){
        return(<p>Loading...</p>)
    }
    else 
    return(
        <div>
        <Map currentRoom={info.id}/>
        <div className ='room-container'>
            <div className='display'>
            <h4>Room</h4>
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
            <Button color='primary' className= 'dirbutton' onClick={e => move('s')}>North</Button>
            <Button color='primary' className= 'dirbutton' onClick={e => move('n')}>South</Button>
            <Button color='primary' className= 'dirbutton' onClick={e => move('e')}>East</Button>
            <Button color='primary' className= 'dirbutton' onClick={e =>  move('w')}>West</Button>
        </div>
        </div>
        </div>
    )
}


export default RoomInfo