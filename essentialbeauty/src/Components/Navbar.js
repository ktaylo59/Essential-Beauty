import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Lips from './Lips';
import Eyes from './Eyes';
import Face from './Face';
import Cart from './Cart';


export const Navbar = () => {
  return (
    <Router>
    <nav className="wrapper">
        <h1 id="head">ESSENTIAL BEAUTY</h1>
        <div>
          <div>
            <Link className="navlist" to="/Lips">LIPS</Link
            <Link className="navlist">EYES</li>
            <li className="navlist">FACE</li>
            <li className="carticon">
              <button>
              <i className="fa fa-shopping-cart" />
              my cart
              </button>
              </li>
          
          </div>
    </nav>
    <Switch>
      <Route exact path="/Lips" component={Lips} />
      <Route path="/Eyes" component={Eyes} />
      <Route path ="/Face" component={Face}/>
      <Route path ="/Cart" component={Cart}/>
      </Switch>
    </Router>
  );
}



export default Navbar;
