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

    const newThing = React.useRef(null)

    const handleNew = async(event) => {
        const response = await fetch(props.URL + 'things/', {
            method: "post",
            headers: {
                Authorization: localStorage.getItem('access_token')
                ? 'JWT ' + localStorage.getItem('access_token')
                : null,
                "Content-Type": "application/json",
                accept: 'application/json',
            },
            body: JSON.stringify({name: newThing.current.value})
        })

        getThings()
        console.log(newThing)
        newThing.current.value = ""
    }

return (
<div className="content">
    <div className="banner">
        <h1>Things</h1>
    </div>
{/* <input type="text" name="newthing" ref={newThing}/>
<button onClick={handleNew}>New Thing</button> */}
<ul className="thingList">
    {data.things && data.things.length > 0 ? data.things.map((thing => <Link to={'things/' + thing.slug}>{thing.name}</Link>)) : null}
</ul>
<input type="text" name="newthing" ref={newThing}/>
<button onClick={handleNew}>New Thing</button>
</div>
)
}

export default Things