import React, {useState} from 'react'
import axios from 'axios'

import { Button, Form, Input } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import './login.css'

const Login = (props) => {
    const[form, setValues] = useState({
        username : '',
        password : '',
    })
    
    const handleChange = name => event => {
        setValues({ ...form, [name]: event.target.value });

    };
    
    
    
    onsubmit = e => {
        e.preventDefault();
        axios.post(`${process.env.REACT_APP_API_URL}/api/login/`, form)
    .then(res => {
        props.history.push('/home')
        localStorage.setItem('key', res.data.key)
    })
    }
    
    return(
        <div>
            <Form className='login-form' onSubmit={onsubmit}> 
            <h1 className='login-header'>Login</h1>
            <Input value={form.username} placeholder ={'Enter your Username'} onChange={handleChange('username')} />
            <Input value={form.password} type='password' placeholder ={'Enter your Password'} onChange={handleChange('password')} />
            <Button className='login-button' color='primary'>Login</Button>
            </Form >
        </div>
    )
    
    }

    export default Login