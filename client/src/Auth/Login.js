import React, {useState} from 'react'
import axios from 'axios'

import { Button, Form, Input } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import './login.css'

const Login = () => {
    const[form, setValues] = useState({
        username : '',
        password : '',
    })
    
    const handleChange = name => event => {
        setValues({ ...form, [name]: event.target.value });

    };
    
    
    
    onsubmit = e => {
        e.preventDefault();
        axios.post(`${process.env.REACT_APP_API}/api/login`, form)
    .then(res => {
        localStorage.setItem('key', res.data.key)
    })
    }
    
    return(
        <div>
            <Form className='login-form' onSubmit={onsubmit}> 
            <Input value={form.username} placeholder ={'Enter your Username'} onChange={handleChange('username')} />
            <Input value={form.password} placeholder ={'Enter your Password'} onChange={handleChange('password')} />
            <Button className='login-button' color='primary'>Login</Button>
            </Form >
        </div>
    )
    
    }

    export default Login