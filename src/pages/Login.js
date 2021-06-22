// import React from "react"

// const Login = (props) => {

//     const username = React.useRef(null)
//     const password = React.useRef(null)

//     const handleLogin = (event) => {
//         const un = username.current.value
//         const pw = password.current.value

//         props.getToken(un, pw)

//         username.current.value = ""
//         password.current.value = ""
//     }

//     return <div>
//         <input type="text" name="username" ref={username}/>
//         <input type="password" name="password" ref={password}/>
//         <button onClick={handleLogin}>Login</button>
//     </div>
// }

// export default Login

import React, {useState} from 'react'
import axiosInstance from '../axios'
import { useHistory } from 'react-router-dom'

export default function SignUp() {
    const history = useHistory();
    const initialFormData = Object.freeze({
        username: '',
        password: ''
    });

    const [formData, updateFormData] = useState(initialFormData);

    const handleChange = (e) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim(),
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);

        axiosInstance
            .post('api/token/', {
                username: formData.username,
                password: formData.password
            })
            .then((res) => {
                localStorage.setItem('access_token', res.data.access);
                localStorage.setItem('refresh_token', res.data.refresh);
                axiosInstance.defaults.headers['Authorization'] =
                    'JWT' + localStorage.getItem('access_token');
                history.push('/');
                // console.log(res);
                // console.log(res.data);
            });
    }

    return (
        <div className="banner">
            <form>
                <input 
                    type="text" 
                    name="username" 
                    label="username"
                    id="username"
                    autoComplete="current-username"
                    onChange={handleChange}
                />
                <input 
                    type="password" 
                    name="password" 
                    label="password"
                    id="password"
                    autoComplete="current-password"
                    onChange={handleChange}
                />
                <button 
                    type="submit"
                    onClick={handleSubmit}>Sign In</button>
            </form>
        </div>
    )

}