import React from 'react';

const Lipliner = (props) => {
        return(
        <div className="product-wrapper">
                <div className="lippie-wrapper">
                  <div>
           <img src={props.lipliner.api_featured_image} alt="images"/></div>
              <div>
              <h6>{props.lipliner.name}</h6> 
               <p> {props.lipliner.product_type}</p>
               <p> {props.lipliner.price}</p>
                </div>
                <button>Add to Cart</button>
                </div>
        </div>
        
        );
}
export default Lipliner;