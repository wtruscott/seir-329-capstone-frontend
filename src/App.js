import './App.css';
import {Route} from "react-router-dom"
import React from "react"
import Login from "./pages/Login"
import Things from "./pages/Things"


function App(props) {

  const [token, setToken] = React.useState({})

  const URL = "https://seir-329-capstone.herokuapp.com/"

  // const getToken = async (un, pw) => {
  //   const response = await fetch(URL + "api/token/", {
  //     method: "post",
  //     headers: {
  //       "Content-Type": "application/json"
  //     },
  //     body: JSON.stringify({username: un, password: pw})
  //   })
  //   const data = await response.json()
  //   console.log(data)
  //   setToken(data)
  //   localStorage.setItem("token", JSON.stringify(data))
  // }

  // React.useEffect(() => {
  //   const possibleToken = JSON.parse(localStorage.getItem("token"))
  //   if (possibleToken){
  //     setToken(possibleToken)
  //     console.log(possibleToken)
  //   }
  // }, [])

  // React.useEffect(() => {

  //   if(token.access){
  //     props.history.push("/things")
  //   } else {
  //     props.history.push("/")
  //   }
  // }, [token.access])

  return (
    <div className="App">
      <h1>WhereHouse</h1>

      {/* <Route exact path="/" render={(rp) => <Login {...rp}/>}/> */}

      <Route exact path="/" render={(rp) => <Things URL={URL} {...rp}/>}/>
    </div>
  );
}

export default App;
