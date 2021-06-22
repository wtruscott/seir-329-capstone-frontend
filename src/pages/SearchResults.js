import React, { useState, useEffect } from "react"
import SearchBar from '../components/SearchBar'
import SearchDisplay from '../components/SearchDisplay'
import {Link} from "react-router-dom"


const Results = (props) => {

    const URL = "https://seir-329-capstone.herokuapp.com/"


    const [things, setThings] = useState(null)

    const goLook = async (searchterm) => {
        const response = await fetch(
          URL + 'api/search/?search=' + searchterm
        );
        const data = await response.json();
        setThings(data);
        
      }

      const getThings = async (searchterm) => {
        const response = await fetch(URL + 'api/search/?search=' + searchterm, {
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

return (
<div className="content">
    <div className="banner">
        <SearchBar URL={URL} goLook={getThings}/>
    </div>
        <SearchDisplay things={things}/>
</div>
)
}

export default Results