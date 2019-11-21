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


// const myConfig = {
//     nodeHighlightBehavior: true,
//     panAndZoom: false,
//     // "staticGraph": true,
//     node: {
//         color: "lightgreen",
//         size: 2200,
//         highlightStrokeColor: "blue",
//     },
//     link: {
//         highlightColor: "lightblue",
//     },
// };

const myConfig = {
    "automaticRearrangeAfterDropNode": false,
    "collapsible": false,
    "directed": false,
    "focusAnimationDuration": 0.75,
    "focusZoom": 1,
    "height": 600,
    "highlightDegree": 1,
    "highlightOpacity": 1,
    "linkHighlightBehavior": true,
    "maxZoom": 8,
    "minZoom": 0.1,
    "nodeHighlightBehavior": true,
    "panAndZoom": false,
    "staticGraph": false,
    "staticGraphWithDragAndDrop": true,
    "width": 1000,
    "d3": {
      "alphaTarget": 0.05,
      "gravity": -400,
      "linkLength": 180,
      "linkStrength": 1
    },
    "node": {
      "color": "black",
      "fontColor": "black",
      "fontSize": 20,
      "fontWeight": "normal",
      "highlightColor": "SAME",
      "highlightFontSize": 12,
      "highlightFontWeight": "bold",
      "highlightStrokeColor": "blue",
      "highlightStrokeWidth": "SAME",
      "labelProperty": "name",
      "mouseCursor": "pointer",
      "opacity": 1,
      "renderLabel": true,
      "size": 5000,
      "strokeColor": "none",
      "strokeWidth": 2,
      "svg": "",
      "symbolType": "circle"
    },
    "link": {
      "color": "#d3d3d3",
      "fontColor": "black",
      "fontSize": 12,
      "fontWeight": "normal",
      "highlightColor": "blue",
      "highlightFontSize": 8,
      "highlightFontWeight": "bold",
      "labelProperty": "label",
      "mouseCursor": "pointer",
      "opacity": 1,
      "renderLabel": true,
      "semanticStrokeWidth": true,
      "strokeWidth": 1.5,
      "markerHeight": 6,
      "markerWidth": 6
    }
  }


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
