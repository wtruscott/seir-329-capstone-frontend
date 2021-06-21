import React from 'react'
import { Link } from 'react-router-dom'

const Homepage = () => {

return (
    <div>
        <h1>This is the HomePage</h1>

        <Link to="/house">
            My House
        </Link>
        <Link to="/storage">
            My Storage
        </Link>
        <Link to="/moving">
            Moving
        </Link>
        <Link to="/collections">
            Collections
        </Link>
    </div>
)
  
}

export default Homepage