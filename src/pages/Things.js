import React from "react"
import {Link} from "react-router-dom"

const Things = (props) => {

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

    // const newThing = React.useRef(null)

    // const handleNew = async(event) => {
    //     const response = await fetch(props.URL + 'things/', {
    //         method: "post",
    //         headers: {
    //             Authorization: `Bearer ${props.tokens.access}`,
    //             "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify({name: newThing.current.value})
    //     })

    //     getThings()
    //     console.log(newThing)
    //     newThing.current.value = ""
    // }

return <>
<h1>Things</h1>
{/* <input type="text" name="newthing" ref={newThing}/>
<button onClick={handleNew}>New Thing</button> */}
<ul>
    {things && things.length > 0 ? things.map((thing => <Link to={'things/' + thing.slug}>{thing.name}</Link>)) : null}
</ul>
</>

}

export default Things