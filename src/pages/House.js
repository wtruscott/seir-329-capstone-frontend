import React, { useState, useEffect } from "react"
import axiosInstance from '../axios';
import {Link} from "react-router-dom"

const House = (props) => {

const [data, setData] = useState({ places: [] });

useEffect(() => {
        axiosInstance.get('places/').then((res) => {
        setData({ places: res.data });
        console.log(res.data);
        });
}, [setData]);

return (
        <div className="content">
                <div className="banner">
                        <h1>My House</h1>
                </div>
                <ul className="placeList">
                {data.places && data.places.length > 0 ? data.places.map((place => <Link to={'places/' + place.slug}>{place.name}</Link>)) : null}
                </ul>
        </div>
)
  
}

export default House