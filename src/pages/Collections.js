import React, { useState, useEffect } from "react"
import axiosInstance from '../axios';
import {Link} from "react-router-dom";
import CollectionCard from '../components/CollectionCard'

const Collections = () => {

    const [data, setData] = useState({ collections: [] });

    useEffect(() => {
        axiosInstance.get('collections/').then((res) => {
        setData({ collections: res.data });
        console.log(res.data);
        });
    }, [setData]);

return (
    <div className="content">
    <div className="banner">
        <h1>My Collections</h1>
    </div>
    <ul className="collectionGrid">
    {data.collections && data.collections.length > 0 ? data.collections.map((collection => <Link to={'collections/' + collection.slug}><CollectionCard name={collection.name}/></Link>)) : null}
    </ul>
    </div>
)
  
}

export default Collections