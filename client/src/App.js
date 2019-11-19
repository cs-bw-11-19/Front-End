import React from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import Register from './Auth/Register'
import Login from './Auth/Login'
import Landing from './Components/Landing'


function App() {
  return (
    <div className="App">
      <div>
      <Route exact path='/' component={Landing} />
      <Route path='/register' component={Register} />
      <Route path='/login' component={Login} />
      </div>
    </div>
  );
}

export default App;
