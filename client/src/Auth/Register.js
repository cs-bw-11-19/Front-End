import React, {useState} from 'react'
import axios from 'axios'


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
    axios.post(`${process.env.REACT_APP_API}/api/registration`, form)
.then(res => {
    localStorage.setItem('key', res.data.key)
})
}

return(
    <div>
        <form onSubmit={onsubmit}> 
        <input value={form.username} placeholder ={'Enter your Username'} onChange={handleChange('username')} />
        <input value={form.password} placeholder ={'Enter your Password'} onChange={handleChange('password')} />
        <input value={form.password2} placeholder ={'Confirm your Password'} onChange={handleChange('password2')} />
        <button>Register</button>
        </form >
    </div>
)

}


export default Register