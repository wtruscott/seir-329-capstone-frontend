import React, { useState, useEffect } from "react";
import axiosInstance from '../axios';
import { useParams } from 'react-router-dom';

const SingleContainer = () => {

    const { slug } = useParams();
    
    const [data, setData] = useState({ containers: [] });

    useEffect(() => {
        axiosInstance.get('containers/' + slug).then((res) => {
            setData({ containers: res.data });
            console.log(res.data);
        });
    }, [setData]);

return (
    <div className="content">
        <div className="banner">
            <h1>Here's a Container</h1>
        </div>
    <h1>{data.containers.name}</h1>
    <h2>{data.containers.things}</h2>
    </div>
)
  
}

export default SingleContainer