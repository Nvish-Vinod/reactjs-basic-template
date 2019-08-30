
import React, { Component } from "react";
import {
  Route,
  NavLink,
  BrowserRouter
} from "react-router-dom";
import Home from "./Home";
import Blog from "./Blog";
import Contact from "./Contact";

import Industries from "./Industries";
import Services from "./Services";
           

class Nav extends Component {             
  render() {
    return (
      <BrowserRouter>
        <div>
          <h1>Navigation</h1>
          <ul className="header">
            <li><NavLink exact to="/">Home</NavLink> </li>
            <li><NavLink to="/Blog">Blog</NavLink></li>
            <li><NavLink to="/Contact">Contact</NavLink></li>       
            <li><NavLink to="/Services">Services</NavLink></li>     
            <li><NavLink to="/Industries">Industries</NavLink></li>
          </ul>              
          <div className="content">            
            <Route exact path="/" component={Home} />
            <Route path="/blog" component={Blog} />
            <Route path="/contact" component={Contact} />
            <Route path="/industries" component={Industries} />
            <Route path="/services" component={Services} />  
          </div>              
        </div>
      </BrowserRouter>
    );
  }
}

export default Nav;
