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

        <ul>
          <li><a href="/Lips">LIPS</a>
              <ul class="dropdown">
                <li><a href="/Lips">Lipstick</a></li>
                <li><a href="/Lips">Lip Liner</a></li>
              </ul>
          </li>
          <li><a href="/Eyes">EYES</a>
              <ul class="dropdown">
                <li><a href="/Eyes">Eyeshadows</a></li>
                <li><a href="/Eyes">Eye Liner</a></li>
              </ul>
          </li>
          <li><a href="/Face">FACE</a>
              <ul className="dropdown">
                <li><a href="/Face">Foudation</a></li>
                <li><a href="/Face">Blush</a></li>
              </ul>
          </li>
                 
          <li className="carticon" to="/Cart">
              <button>
              <i className="fa fa-shopping-cart" />
              CART
              </button>
          </li>
        </ul>
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
