import React, { useState, useEffect } from "react"
import axiosInstance from '../axios';
import {Link} from "react-router-dom"

const Storage = (props) => {

    const [data, setData] = useState({ containers: [] });

    useEffect(() => {
        axiosInstance.get('containers/').then((res) => {
        setData({ containers: res.data });
        console.log(res.data);
        });
    }, [setData]);

return (
    <div className="content">
        <div className="banner">
            <h1>Storage</h1>
        </div>
    <ul className="containerList">
        {data.containers && data.containers.length > 0 ? data.containers.map((container => <Link to={'containers/' + container.slug}>{container.name}</Link>)) : null}
    </ul>
    </div>
)
  
}

export default Storage