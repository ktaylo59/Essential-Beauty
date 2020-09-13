import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import ProductImages from "./Components/ProductImages";



class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      makeup: []
    };
  }
//api request
  componentDidMount() {
    fetch('http://makeup-api.herokuapp.com/api/v1/products.json')
    .then(response => response.json()) 
    .then((data) => {
      this.setState({data})
    })
  }
   
  render() {
     return (
    <>
    <Navbar />
    <ProductImages/>
    <Footer />
    </>
      );
    }
  }
export default App;
