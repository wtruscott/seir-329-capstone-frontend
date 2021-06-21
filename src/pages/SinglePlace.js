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
    <>
        <h1>Here's a Place</h1>
        <h1>{data.places.name}</h1>
        <h2>{data.places.things}</h2>
    </>

)
  
}

export default SinglePlace