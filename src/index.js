import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Logout from "./components/Logout";
import Create from './components/Create';
import Edit from './components/Edit';
import Delete from './components/Delete';
import SingleThing from './pages/SingleThing'

ReactDOM.render(
  <Router> 
    <React.StrictMode>
      <Header/>
      <Switch>
        <Route exact path= "/" component={App}/>
        {/* <Route exact path="/create" component={Create}/>
        <Route exact path="/edit:id" component={Edit}/>
        <Route exact path="/delete:id" component={Delete}/> */}
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/logout" component={Logout} />
        <Route path="/things/:slug" component={SingleThing} />
      </Switch>
      <Footer/>
    </React.StrictMode>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
