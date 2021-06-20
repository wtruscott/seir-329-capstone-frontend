import React, { useState, useEffect } from "react";
import axiosInstance from '../axios';
import { useParams } from 'react-router-dom';

export default function SingleThing() {
    const { slug } = useParams();
    
    const [data, setData] = useState({ things: [] });

    useEffect(() => {
        axiosInstance.get('things/' + slug).then((res) => {
            setData({ things: res.data });
            console.log(res.data);
        });
    }, [setData]);

    return (
        <div>
            <h1>Here's a thing</h1>
            <h1>{data.things.name}</h1>
            <h2>{data.things.description}</h2>
            <h2>{data.things.location}</h2>
            <h2>{data.things.owner}</h2>
        </div>
    )
}