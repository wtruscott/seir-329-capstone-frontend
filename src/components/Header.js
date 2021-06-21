import React, { useState } from 'react'
import { Link, useHistory } from "react-router-dom";
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/Inputbase'

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
            <SearchIcon/>
            <InputBase
                placeholder="Search..."
                value={data.search}
                onChange={(newValue) => setData({ search: newValue })}
                onRequestSearch={()=> goSearch(data.search)}
            />
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