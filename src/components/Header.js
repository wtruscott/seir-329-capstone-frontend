import React, { useState } from 'react'
import { Link, useHistory } from "react-router-dom";

function Header() {
    let history = useHistory();
    const [data, setData] = useState({ search: '' })

    const goSearch = (e) => {
        history.pushState({
            pathname: 'api/search/',
            search: '?search=' + data.search,
        });
        window.location.reload();
    }

    return (
        <div className= "NavBar">
             <Link to="/">
                Home
            </Link>
            <Link to="/things">
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