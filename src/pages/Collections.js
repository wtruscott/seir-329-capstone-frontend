import React, { useState, useEffect } from "react"
import axiosInstance from '../axios';
import {Link} from "react-router-dom"

const Collections = () => {

    const [data, setData] = useState({ collections: [] });

    useEffect(() => {
        axiosInstance.get('collections/').then((res) => {
        setData({ collections: res.data });
        console.log(res.data);
        });
    }, [setData]);

return (
    <>
    <h1>My Collections</h1>
    <ul>
    {data.collections && data.collections.length > 0 ? data.collections.map((collection => <Link to={'collections/' + collection.slug}>{collection.name}</Link>)) : null}
    </ul>
    </>
)
  
}

export default Collections