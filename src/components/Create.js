import React, { useState, useEffect } from 'react';
import axiosInstance from '../axios';
import { useHistory } from 'react-router-dom';

const Create = (props) => {

const [formData, setFormData] = useState(props.thing)

const [newThing, setNewThing] = useState(null)

useEffect(() => {
    fetch(props.URL + "things/")
    .then((response) => response.json())
    .then((data) => setNewThing(data))
}, [])

const handleSubmit = (event) => {
    event.preventDefault()
    props.handleSubmit(formData)
}

const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value })
  }

const loading = () => {
    return (
    <div className="content">
        <h1 className="banner">Making a Thing!</h1>
    </div>
    )
}

const loaded = () => {
    return (
        <div className="content">
        <div className="thingForm">
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">What do you call this Thing? </label> <br/>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="location">Where do you keep this thing? </label><br/>
            <input
              type="text"
              name="location"
              id="location"
              value={formData.location}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="description">Tell us about this thing. </label> <br/>
            <input
              type="text"
              name="description"
              id="description"
              value={formData.description}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="owner">type your username!</label><br/>
            <input
              type="text"
              name="owner"
              id="owner"
              value={formData.owner}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="slug">slug</label><br/>
            <input
              type="text"
              name="slug"
              id="slug"
              value={formData.slug}
              onChange={handleChange}
            />
          </div>
          <input type="submit" value={props.label} id="addAThing" /> 
        </form>
        </div>
        </div>
      )
}

return newThing ? loaded() : loading()


}

export default Create