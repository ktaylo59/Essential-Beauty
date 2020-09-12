import React from "react";

function Navbar() {
  return (
    <nav className="wrapper">
      <div>
        <h1 id="head">ESSENTIAL BEAUTY</h1>
          <ul>
            <li className="navlist">LIPS</li>
            <li className="navlist">EYES</li>
            <li className="navlist">FACE</li>
            <li className="carticon"><i class ="fa fa-shopping-cart"></i></li>
          </ul>
      </div>
    </nav>
  );
}

export default Navbar;
