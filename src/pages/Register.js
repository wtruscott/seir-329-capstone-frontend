import React, {useState} from 'react'
import axiosInstance from '../axios'
import { useHistory } from 'react-router-dom'

export default function SignUp() {
    const history = useHistory();
    const initialFormData = Object.freeze({
        username: '',
        password: '',
        email: '',
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
            .post('api/user/register/', {
                username: formData.username,
                password: formData.password,
                email: formData.email,
            })
            .then((res) => {
                history.push('/login');
                console.log(res);
                console.log(res.data);
            });
    }

    return (
        <div>
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
                <input 
                    type="email" 
                    name="email" 
                    label="email"
                    id="email"
                    autoComplete="current-email"
                    onChange={handleChange}
                />
                <button 
                    type="submit"
                    onClick={handleSubmit}>Create Account</button>
            </form>
        </div>
    )

}