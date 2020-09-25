import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import { useState } from "react";
// import Lips from "./Lips";
// import Eyes from "./Eyes";
// import Face from "./Face";
import Lipsticks from "./Lipsticks";
import Lipliners from "./Lipliners";
import Eyeshadows from "./Eyeshadows";
import Eyeliners from "./Eyeliners";
import Foundations from "./Foundations";
import Blushes from "./Blushes";
import Home from "./Home";
import Login from "./Login";
import Cart from "./Cart";
import ProductPage from "./ProductPage";

export const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <Router>
      <div>
        <nav className="nav-wrapper">
          <h1 id="head">ESSENTIAL BEAUTY</h1>

          <ul>
            <li>
              <Link to="/" onClick={handleClick}>
                LIPS
              </Link>
              <ul className="dropdown">
                <li>
                  <Link to="/Lipsticks">LIPSTICKS</Link>
                </li>
                <li>
                  <Link to="/Lipliners">LIP PENCILS</Link>
                </li>
              </ul>
            </li>

            <li>
              <Link to="/">EYES</Link>
              <ul className="dropdown">
                <li>
                  <Link to="/Eyeshadows">EYESHADOWS</Link>
                </li>
                <li>
                  <Link to="/Eyeliners">EYE LINERS</Link>
                </li>
              </ul>
            </li>

            <li>
              <Link to="/">FACE</Link>
              <ul className="dropdown">
                <li>
                  <Link to="/Foundations">FOUNDATIONS</Link>
                </li>
                <li>
                  <Link to="/Blushes">BLUSHES</Link>
                </li>
              </ul>
            </li>

            <Link to={"/Login"} className="carticon">
              <button className="btncontainter">
                <span className="mr-2">
                  {/* <i className="fa fa-shopping-bag" aria-hidden="true"></i> */}
                  LOG IN
                </span>
              </button>
            </Link>

            <Link to="/Cart" className="carticon">
              <button className="btncontainter">
                <span className="mr-2">
                  <i className="fa fa-shopping-bag" aria-hidden="true"></i>
                  MY CART
                </span>
              </button>
            </Link>
          </ul>
        </nav>
      </div>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Login" component={Login} />
        {/* <Route exact path="/Eyes" component={Eyes} />
        <Route exact path="Face" component={Face} /> */}
        <Route path="/Cart" component={Cart} />
        <Route path="/Lipsticks" component={Lipsticks} />
        <Route path="/Lipliners" component={Lipliners} />
        <Route path="/Eyeshadows" component={Eyeshadows} />
        <Route path="/Eyeliners" component={Eyeliners} />
        <Route path="/Foundations" component={Foundations} />
        <Route path="/Blushes" component={Blushes} />
        <Route path="/ProductPage" component={ProductPage} />
      </Switch>
    </Router>
  );
};

export default Navbar;
