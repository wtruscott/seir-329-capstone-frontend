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
            });
    }

    return (
        <div className="content">
            <form className="banner">
                <input 
                    type="text" 
                    name="username" 
                    label="username"
                    placeholder="username"
                    id="username"
                    autoComplete="current-username"
                    onChange={handleChange}
                />
                <input 
                    type="password" 
                    name="password" 
                    placeholder="password"
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