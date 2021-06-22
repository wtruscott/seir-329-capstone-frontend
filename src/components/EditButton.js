import React from 'react'
import { Link } from 'react-router-dom'

const EditButton = (props) => {
    return (
        <div className="editButton">
            <Link to='/edit-thing'>
                Edit
            </Link>
        </div>
    )
}

export default EditButton