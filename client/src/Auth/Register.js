import React, {useState} from 'react'
import axios from 'axios'
import { Button, Form, Input } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import './register.css'

const Register = (props) => {
const[form, setValues] = useState({
    username : '',
    password1 : '',
    password2 : ''
})

const handleChange = name => event => {
    setValues({ ...form, [name]: event.target.value });
    // console.log(event.target.value)
};



onsubmit = e => {
    e.preventDefault();
    axios.post(`${process.env.REACT_APP_API_URL}/api/registration/`, form)
.then(res => {
    props.history.push('/home')
    localStorage.setItem('key', res.data.key)
    console.log(res.data)
})
}

return(
    <div className='register'>
        <Form className='register-form' onSubmit={onsubmit}>
            <h1 className='register-header'>Sign Up</h1> 
        <Input value={form.username} placeholder ={'Enter your Username'} onChange={handleChange('username')} />
        <Input value={form.password1} type='password' placeholder ={'Enter your Password'} onChange={handleChange('password1')} />
        <Input value={form.password2} type='password' placeholder ={'Confirm your Password'} onChange={handleChange('password2')} />
        <Button className='register-button' color='primary'>Register</Button>
        </Form >
    </div>
)

}


export default Register