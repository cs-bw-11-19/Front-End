import React, {useState} from 'react'
import axios from 'axios'
import { Button, Form, Input } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import './register.css'

const Register = () => {
const[form, setValues] = useState({
    username : '',
    password : '',
    password2 : ''
})

const handleChange = name => event => {
    setValues({ ...form, [name]: event.target.value });
    console.log(event.target.value)
};



onsubmit = e => {
    e.preventDefault();
    axios.post(`${process.env.REACT_APP_API_URL}/api/registration`, form)
.then(res => {
    localStorage.setItem('key', res.data.key)
})
}

return(
    <div className='register'>
        <Form className='register-form' onSubmit={onsubmit}> 
        <Input value={form.username} placeholder ={'Enter your Username'} onChange={handleChange('username')} />
        <Input value={form.password} type='password' placeholder ={'Enter your Password'} onChange={handleChange('password')} />
        <Input value={form.password2} type='password' placeholder ={'Confirm your Password'} onChange={handleChange('password2')} />
        <Button className='register-button' color='primary'>Register</Button>
        </Form >
    </div>
)

}


export default Register