import React, {useState} from 'react'
import axios from 'axios'

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
            <form onSubmit={onsubmit}> 
            <input value={form.username} placeholder ={'Enter your Username'} onChange={handleChange('username')} />
            <input value={form.password} placeholder ={'Enter your Password'} onChange={handleChange('password')} />
            <button>Login</button>
            </form >
        </div>
    )
    
    }

    export default Login