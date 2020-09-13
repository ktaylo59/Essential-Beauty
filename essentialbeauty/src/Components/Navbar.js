import React from "react";

export const Navbar = () => {
  return (
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
  );
}

export default Navbar;
