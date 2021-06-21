import React, { useState, useEffect } from "react";
import axiosInstance from '../axios';
import { useParams } from 'react-router-dom';

const SinglePlace = () => {

    const { slug } = useParams();
    
    const [data, setData] = useState({ places: [] });

    useEffect(() => {
        axiosInstance.get('places/' + slug).then((res) => {
            setData({ places: res.data });
            console.log(res.data);
        });
    }, [setData]);
        
return (
    <div className="content">
    <div className="banner">
        <h1>{data.places.name}</h1>
    </div>
        <h2>{data.places.things}</h2>
    </div>

)
  
}

export default SinglePlace