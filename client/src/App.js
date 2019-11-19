import React from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import Register from './Auth/Register'
import Login from './Auth/Login'
import Landing from './Components/Landing'
import PrivateRoute from './Components/PrivateRoute'
import Home from './Components/Home'


function App() {
  return (
    <div className="App">
      <div>
      <Route exact path='/' component={Landing} />
      <Route path='/register' component={Register} />
      <Route path='/login' component={Login} />
      <PrivateRoute path='/home' component={Home} />
      </div>
    </div>
  );
}

export default App;
