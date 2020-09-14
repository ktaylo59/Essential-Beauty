import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Lips from './Lips';
import Eyes from './Eyes';
import Face from './Face';

export const Navbar = () => {
  return (
    <Router>
    <nav className="wrapper">
      <div>
        <h1 id="head">ESSENTIAL BEAUTY</h1>
          <ul>
            <li className="navlist">LIPS</li>
            <li className="navlist">EYES</li>
            <li className="navlist">FACE</li>
            <li className="carticon"><i className="fa fa-shopping-cart"></i></li>
          </ul>
      </div>
    </nav>
    <Switch>
      <Route exact path="/Lips" component={Lips} />
      <Route path="/Eyes" component={Eyes} />
      <Route path ="/Face" component={Face}/>
      </Switch>
    </Router>
  );
}

export default Navbar;
