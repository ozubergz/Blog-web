import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import BlogList from './components/BlogList';
import About from './components/About';
import Contact from './components/Contact';
import SideNav from './components/SideNav';
import Login from './components/Login';
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          { window.location.pathname === "/login" ? null : <SideNav/> }
          <Route path="/" exact component={BlogList} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/login" component={Login} />
        </Router>
      </div>
    );
  }
}

export default App;
