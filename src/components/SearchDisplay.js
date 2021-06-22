import React from 'react'
import { Link } from 'react-router-dom'

const SearchDisplay = ({things}) => {
    console.log(things)

    const loaded = () => {
            return (
                <ul className="thingList">
                    {things && things.length > 0 ? things.map((thing => <Link to={'things/' + thing.slug}>{thing.name}</Link>)) : null}
                </ul>
            )
        }
    
    const loading = () => {
        return (
            <>
            <h1>No things to see here! Move along.</h1>
            </>
        )
    }
    
    return things ? loaded() : loading()
    }
export default SearchDisplay