import React, { useState, useEffect } from "react";
import axiosInstance from '../axios';
import { useParams } from 'react-router-dom';
import EditButton from '../components/EditButton'

export default function SingleThing(props) {
    const { slug } = useParams();
    
    const [data, setData] = useState({ things: [] });

    useEffect(() => {
        axiosInstance.get('things/' + slug).then((res) => {
            setData({ things: res.data });
            console.log(res.data);
        });
    }, [setData]);

    return (
        <div className="content">
            <div className="banner">
                <h1>Here's a thing</h1>
            </div>
            <h1>{data.things.name}</h1>
            <h2>{data.things.description}</h2>
            <h2>{data.things.location}</h2>
            <h2>{data.things.owner}</h2>
            <button onClick={() => {
            props.selectThing(data.things)
            props.history.push("/edit-thing")
          }}>
              Edit This Thing
          </button>
          <button onClick={() => {
              props.deleteThing(data.things)
              props.history.push('/things')
          }}>
              Delete This Thing
          </button>
        </div>
    )
}