import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faWarehouse } from '@fortawesome/free-solid-svg-icons'
import { faBoxOpen } from '@fortawesome/free-solid-svg-icons'
import { faList } from '@fortawesome/free-solid-svg-icons'


const Homepage = () => {

return (
    <div className="content">
        <div className="banner">
            <h1>Welcome to WhereHouse, Let's Get Organized</h1>
        </div>
        <div className="foursquare">
            <Link to="/house">
                <div className="sqaure" id="houseSquare">
                    <FontAwesomeIcon icon={faHome}/>
                    My House
                </div>
            </Link>
            <Link to="/storage">
                <div className="sqaure" id="storageSquare">
                <FontAwesomeIcon icon={faWarehouse}/>
                My Storage
                </div>
            </Link>
            <Link to="/moving">
                <div className="sqaure" id="movingSquare">
                    <FontAwesomeIcon icon={faBoxOpen}/>
                    Moving Time
                </div>
            </Link>
            <Link to="/collections">
            <div className="sqaure" id="collectionSquare">
                <FontAwesomeIcon icon={faList}/>
                Collections
                </div>
            </Link>
        </div>
    </div>
)
  
}

export default Homepage