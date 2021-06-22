import React, { useState, useEffect } from "react"
import axiosInstance from '../axios';
import {Link} from "react-router-dom"

const Things = (props) => {

    const [data, setData] = useState({ things: [] });

    useEffect(() => {
        axiosInstance.get('things/').then((res) => {
            setData({ things: res.data });
            console.log(res.data);
        });
    }, [setData]);

    const [things, setThings] = React.useState(null)

    const getThings = async () => {
        const response = await fetch(props.URL + 'things/', {
            method: "get",
            headers: {
                Authorization: localStorage.getItem('access_token')
                ? 'JWT ' + localStorage.getItem('access_token')
                : null
            }
        })
        const data = await response.json()
        console.log(data)
        setThings(data)
    }

    React.useEffect(() => getThings(), [])

return (
    <div className="content">
        <div className="banner">
            <h1>Things</h1>
        </div>
    <Link to="/add-thing">
        Add a New Thing!
    </Link>
    <ul className="thingList">
        {data.things && data.things.length > 0 ? data.things.map((thing => <Link to={'things/' + thing.slug}>{thing.name}</Link>)) : null}
    </ul>
</div>
)
}

export default Things