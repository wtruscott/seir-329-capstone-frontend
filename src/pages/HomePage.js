import React from 'react'
import { Link } from 'react-router-dom'

const Homepage = () => {

return (
    <div className="content">
        <div className="banner">
            <h1>Let's Get Organized</h1>
        </div>
        <div className="foursquare">
            <Link to="/house">
                <div className="sqaure" id="houseSquare">
                    My House
                </div>
            </Link>
            <Link to="/storage">
            <div className="sqaure" id="storageSquare">
                    My Storage
                </div>
            </Link>
            <Link to="/moving">
            <div className="sqaure" id="movingSquare">
                    Moving Time
                </div>
            </Link>
            <Link to="/collections">
            <div className="sqaure" id="collectionSquare">
                    My Collections
                </div>
            </Link>
        </div>
    </div>
)
  
}

export default Homepage