import React from 'react'
import {Link} from 'react-router-dom';


const Landing = () => {
return(
    <div>
        <h1>Cryptic Tundra</h1>
      <Link to='/register'>Register</Link>
      <br></br>
      <Link to='/login'>Login</Link>
    </div>
)
}


export default Landing