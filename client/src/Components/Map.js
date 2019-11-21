import React,{useEffect, useState} from 'react'
import { Graph } from "react-d3-graph"; 
import axios from 'axios';

const Map = () => {
    const [rooms, setRooms] = useState([]);
    useEffect(() =>{
        const token = localStorage.getItem('key');
        axios
        .get(`${process.env.REACT_APP_API_URL}/api/adv/rooms/`,{
            headers:{
                Authorization: `Token ${token} `
            }
        })
        .then(res => {
            console.log('res',res.data)
            // console.log('links', res.data.links)
            setRooms(res.data)
        })
    }, [])
// console.log(rooms)
// const mappedrooms = rooms.map(room => {
//     console.log(room.pk)
//     return room
    console.log('links',rooms.links)
    console.log('nodes',rooms.nodes)
// })

// const links = rooms.links.map(link=> {
//     console.log(link)
//     return link

// })

// let data = rooms.map(room =>{
//     console.log(room)
//     return room
// })
 
const display = {
    nodes: rooms.nodes,
    links: rooms.links,
};


console.log(display)


const myConfig = {
    nodeHighlightBehavior: true,
    // "staticGraph": true,
    node: {
        color: "lightgreen",
        size: 2200,
        highlightStrokeColor: "blue",
    },
    link: {
        highlightColor: "lightblue",
    },
};
if (rooms.nodes===undefined && rooms.links===undefined ){
    return (<p>Loading....</p>)
}
else 
return(<div>
    <Graph
    id="graph-id" // id is mandatory, if no id is defined rd3g will throw an error
    data={display}
    config={myConfig}
/>
</div>)
}

export default Map



// create a node for every room
// target room that is connected to 
