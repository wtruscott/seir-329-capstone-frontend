import {useState} from "react"
import React from "react"
// import SearchResults from 'SearchResults'
const SearchForm = (props) => {
    const [formData, setFormData] = useState({
        searchterm: ""
    })
    const handleChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value})
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        props.goLook(formData.searchterm)
    
    }
    return <div className='content'>
        <form onSubmit={handleSubmit} className='banner'>
            <input type="text" value={formData.searchterm} placeholder="What are you looking for?" name="searchterm" onChange={handleChange}/>
            <input type="submit" value="submit"/>
        </form>
    </div>
}
export default SearchForm