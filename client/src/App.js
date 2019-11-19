import React from 'react';
import './App.css';
import {Route, Link} from 'react-router-dom';
import Register from './Auth/Register'
import Login from './Auth/Login'


function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <Link to='/register'>Register</Link>
      <br></br>
      <Link to='/login'>Login</Link>
      <div>
      <Route path='/register' component={Register} />
      <Route path='/login' component={Login} />
      </div>
    </div>
  );
}

export default App;
