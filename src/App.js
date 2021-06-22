import './App.css';
import './style/style.scss'
import { Route, Switch } from "react-router-dom"
import React, { useState, useEffect } from "react"
import Login from "./pages/Login"
import Things from "./pages/Things"
import Header from "./components/Header";
import Footer from "./components/Footer";
import Register from "./pages/Register";
import Logout from "./components/Logout";
import Create from './components/Create';
import SearchResults from './pages/SearchResults';
import SingleThing from './pages/SingleThing'
import SinglePlace from './pages/SinglePlace'
import SingleContainer from './pages/SingleContainer'
import SingleCollection from './pages/SingleCollection'
import HomePage from './pages/HomePage'
import House from './pages/House'
import Collections from './pages/Collections'
import Storage from './pages/Storage'
import Moving from './pages/Moving'


function App(props) {

  const URL = "https://seir-329-capstone.herokuapp.com/"

  const [things, setThings] = useState([])

  const emptyThing = {
    name: "",
    description: "",
    location: "",
    owner: "",
    slug: "",
    favorite: false
  }

  const [selectedThing, setSelectedThing] = useState(emptyThing)

  const getThings = () => {
    fetch(URL + "things/")
      .then((response) => response.json())
      .then((data) => {
        setTimeout(setThings(data), 5000)
      })
    }
  
  useEffect(() => {
    getThings()
  }, [])

  const handleCreate = (newThing) => {
    fetch(URL + "things/", {
      method: "POST",
      headers: {
        Authorization: localStorage.getItem('access_token')
        ? 'JWT ' + localStorage.getItem('access_token')
        : null,
        "Content-Type": "application/json",
        accept: 'application/json',
      },
      body: JSON.stringify(newThing)
    })
    .then(() => getThings())
    }

    const handleUpdate = (thing) => {
      console.log(URL + "things/" + thing.slug)
      fetch(URL + "things/" + thing.slug + "/", {
        method: "PUT",
        headers: {
          Authorization: localStorage.getItem('access_token')
          ? 'JWT ' + localStorage.getItem('access_token')
          : null,
          "Content-Type": "application/json",
          accept: 'application/json',
        },
        body: JSON.stringify(thing),
      }).then(() => getThings())
      }

    const selectThing = (thing) => {
        setSelectedThing(thing)
      }

        const deleteThing = (thing) => {
          fetch(URL + "things/" + thing.slug + "/", {
            method: "delete",
            headers: {
              Authorization: localStorage.getItem('access_token')
              ? 'JWT ' + localStorage.getItem('access_token')
              : null
          }
        })
        .then(() => {
          getThings()
        })
        }

  

  return (
    <div className="App">
      <Header/>
      <Switch>
      <Route exact path="/">
        <HomePage/>
      </Route>
      <Route
        exact path="/things" 
        render={(rp) => <Things URL={URL} {...rp}/>}
        />
        <Route
        exact path="/search" 
        render={(rp) => <SearchResults URL={URL} {...rp}/>}
        />
       <Route
          path="/add-thing"
          render={(routerProps) => (
            <Create
              {...routerProps}
              label={"Add Thing"}
              handleSubmit={handleCreate}
              thing={emptyThing}
              URL={URL}
            />
          )}
        />
        <Route
          path="/edit-thing"
          render={(routerProps) => (
            <Create
              {...routerProps}
              label={"Edit Thing"}
              handleSubmit={handleUpdate}
              thing={selectedThing}
              URL={URL}
            />
          )}
        />
       <Route
        path="/house" 
        render={(rp) => <House URL={URL} {...rp}/>}
        />
      <Route
        exact path="/collections" 
        render={(rp) => <Collections URL={URL} {...rp}/>}
        />
       <Route
        path="/storage" 
        render={(rp) => <Storage URL={URL} {...rp}/>}
        />
       <Route
        path="/moving" 
        render={(rp) => <Moving URL={URL} {...rp}/>}
        />
      
        <Route path="/register"> <Register/> </Route> 
        <Route path="/login"> <Login/> </Route>
        <Route path="/logout"> <Logout/> </Route>
        <Route
        path="/things/:slug"
        render={(rp) => <SingleThing things={things} selectThing={selectThing} deleteThing={deleteThing} {...rp}/>}
        />
        <Route
        path="/places/:slug"
        render={(rp) => <SinglePlace {...rp}/>}
        />
        <Route
        path="/containers/:slug"
        render={(rp) => <SingleContainer {...rp}/>}
        />
        <Route
        path="/collections/:slug"
        render={(rp) => <SingleCollection {...rp}/>}
        />
        </Switch>
        <Footer/>
    </div>
  );
}

export default App;
