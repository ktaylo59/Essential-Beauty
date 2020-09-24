import React from 'react';
import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

class App extends React.Component {

  render() {
 
     return (
  <React.Fragment>
       <Navbar />
       <Footer />
  </React.Fragment>
      );
    }
  }

export default App;