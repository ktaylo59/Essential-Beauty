import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import axios from 'axios';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      data: {}
    }
  }


  componentDidMount() {
    axios.get('http://makeup-api.herokuapp.com/api/v1/products.json')
    .then(response =>  {
     this.setState({ data: response.data.categories}) 
     console.log(response.data);

    })
    .catch(error => {
      console.log(error);
    });
  }
  render() {
   
  return (
    <>
    <Navbar />
    <Footer />
    </>
    
  );
}
}
export default App;
