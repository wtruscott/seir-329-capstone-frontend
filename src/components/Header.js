import React, { useState } from 'react'
import { Link } from "react-router-dom";

const Header = () => {

    return (
        <div className= "NavBar">
             <Link to="/home">
                Home
            </Link>
            <Link to="/things">
                Things
            </Link>
            <Link to="/">
                Login
            </Link>
            <Link to="/logout">
                Logout
            </Link>
            <Link to="/register">
                Register
            </Link>
            <Link to='/search'>
                Look for a Thing!
            </Link>
        </div>
    )
}

export default Header