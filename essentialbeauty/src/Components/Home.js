import React from 'react'
import Lips from "../assets/Lips.jpg";
import Face from "../assets/Face.jpg";
import Eyes from "../assets/Eyes.jpg";


export default function Home() {
    return (
      <div className="row">  
      <div className="column">
          <img src={Lips} alt="pic of lips" style={{height: "100%", width: "auto"}}/>
      </div>
      <div className="column">
          <img src={Face} alt="pic of face" style={{height: "100%", width: "auto"}} />
      </div>
      <div className="column">
          <img src={Eyes} alt="pic of eyes" style={{height: "100%", width: "auto"}} />
      </div>
           </div>
           
    )
}
