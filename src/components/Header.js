import React from 'react'
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className= "NavBar">
            <Link to="/">
                Things
            </Link>
            <Link to="/login">
                Login
            </Link>
            <Link to="/logout">
                Logout
            </Link>
            <Link to="/register">
                Register
            </Link>
        </div>
    )
}

export default Header