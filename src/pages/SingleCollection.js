import React, { useState, useEffect } from "react";
import axiosInstance from '../axios';
import { useParams } from 'react-router-dom';

const SingleCollection = () => {

    const { slug } = useParams();
    
    const [data, setData] = useState({ collections: [] });

    useEffect(() => {
        axiosInstance.get('collections/' + slug).then((res) => {
            setData({ collections: res.data });
            console.log(res.data);
        });
    }, [setData]);


return (
    <>
    <h1>Here's a Collection</h1>
    <h1>{data.collections.name}</h1>
    <h2>{data.collections.things}</h2>
</>
)
  
}

export default SingleCollection