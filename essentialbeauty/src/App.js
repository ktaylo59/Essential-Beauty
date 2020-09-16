import React from 'react';

import "./App.css";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import ProductImages from "./Components/ProductImages";
import Lipsticks from "./Components/Lipsticks";

import Eyes from "./Components/Eyes";
import Face from "./Components/Face";
import Cart from "./Components/Cart";





class App extends React.Component {

 
 
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     data: [],
  //     makeup: []
  //   };
  // }
//api request
  // componentDidMount() {
  //   fetch('http://makeup-api.herokuapp.com/api/v1/products.json')
  //   .then(res => res.json()) 
  //   .then((data) => {
  //     this.setState({data}) 
  //     //sets the value of state to the output from the API call
  //   })
  //   .catch(console.log)
  // }
   
  render() {
    // const imagesList = this.state.data.map((url, i) => {
    //   return <ProductImages key={i} url={url} />
    // })
     return (
    <>
    <Navbar />
    <ProductImages/>
    {/* {imagesList} */}
    {/* <Cosmetics /> */}
    <Lipsticks />
    <Eyes />
    <Face />
    <Cart />
    
    <Footer />
    </>
      );
    }
  }

export default App;