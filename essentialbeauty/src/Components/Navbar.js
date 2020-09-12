import React from "react";

function Navbar() {
  return (
    <nav className="wrapper">
      <div>
        <h1>ESSENTIAL BEAUTY</h1>
          <ul>
            <li className="navlist">Lips</li>
            <li className="navlist">Eyes</li>
            <li className="navlist">Face</li>
            <li className="navlist"><i class ="fa fa-shopping-cart">Cart</i></li>
          </ul>
      </div>
    </nav>
  );
}

export default Navbar;
