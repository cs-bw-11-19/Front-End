import React,{useEffect, useState} from 'react'
import { Graph } from "react-d3-graph"; 
import axios from 'axios';

const Map = (props) => {
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
            setRooms(res.data)
        })
    }, [])


    
 
let newNodes = []
if(rooms.nodes && rooms.links){
    
    let roomMap = {
        rooms:rooms.nodes.map(room => {
                return {
                    ...room, color: (props.currentRoom  !== room.id) || 'blue'
                }
        }), 

        
    };

    newNodes = roomMap
}


const display = {
    nodes: newNodes.rooms,
    links: rooms.links,     
};



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
    "height": 500,
    "highlightDegree": 1,
    "highlightOpacity": 1,
    "linkHighlightBehavior": false,
    "maxZoom": 8,
    "minZoom": 0.1,
    "nodeHighlightBehavior": false,
    "panAndZoom": false,
    "staticGraph": false,
    "staticGraphWithDragAndDrop": false,
    "width": 800,
    "d3": {
      "alphaTarget": 0.05,
      "gravity": -100,
      "linkLength": 100,
      "linkStrength": 1
    },
    "node": {
      "color": "#d3d3d3",
      "fontColor": "black",
      "fontSize": 8,
      "fontWeight": "normal",
      "highlightColor": "SAME",
      "highlightFontSize": 8,
      "highlightFontWeight": "normal",
      "highlightStrokeColor": "SAME",
      "highlightStrokeWidth": "SAME",
      "labelProperty": "id",
      "mouseCursor": "pointer",
      "opacity": 1,
      "renderLabel": true,
      "size": 200,
      "strokeColor": "none",
      "strokeWidth": 1.5,
      "svg": "",
      "symbolType": "circle"
    },
    "link": {
      "color": "#d3d3d3",
      "fontColor": "black",
      "fontSize": 8,
      "fontWeight": "normal",
      "highlightColor": "#d3d3d3",
      "highlightFontSize": 8,
      "highlightFontWeight": "normal",
      "labelProperty": "label",
      "mouseCursor": "pointer",
      "opacity": 1,
      "renderLabel": false,
      "semanticStrokeWidth": false,
      "strokeWidth": 1.5,
      "markerHeight": 6,
      "markerWidth": 6
    }
  }
// {
//     "automaticRearrangeAfterDropNode": false,
//     "collapsible": false,
//     "directed": false,
//     "focusAnimationDuration": 0.75,
//     "focusZoom": 1,
//     "height": 600,
//     "highlightDegree": 1,
//     "highlightOpacity": 1,
//     "linkHighlightBehavior": true,
//     "maxZoom": 8,
//     "minZoom": 0.1,
//     "nodeHighlightBehavior": true,
//     "panAndZoom": false,
//     "staticGraph": false,
//     "staticGraphWithDragAndDrop": true,
//     "width": 1000,
//     "d3": {
//       "alphaTarget": 0.05,
//       "gravity": -400,
//       "linkLength": 180,
//       "linkStrength": 1
//     },
//     "node": {
//       "color": "black",
//       "fontColor": "black",
//       "fontSize": 20,
//       "fontWeight": "normal",
//       "highlightColor": "SAME",
//       "highlightFontSize": 12,
//       "highlightFontWeight": "bold",
//       "highlightStrokeColor": "blue",
//       "highlightStrokeWidth": "SAME",
//       "labelProperty": "name",
//       "mouseCursor": "pointer",
//       "opacity": 1,
//       "renderLabel": true,
//       "size": 5000,
//       "strokeColor": "none",
//       "strokeWidth": 2,
//       "svg": "",
//       "symbolType": "circle"
//     },
    
//     "link": {
//       "color": "#d3d3d3",
//       "fontColor": "black",
//       "fontSize": 12,
//       "fontWeight": "normal",
//       "highlightColor": "blue",
//       "highlightFontSize": 8,
//       "highlightFontWeight": "bold",
//       "labelProperty": "label",
//       "mouseCursor": "pointer",
//       "opacity": 1,
//       "renderLabel": true,
//       "semanticStrokeWidth": true,
//       "strokeWidth": 1.5,
//       "markerHeight": 6,
//       "markerWidth": 6
//     }
//   }


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
