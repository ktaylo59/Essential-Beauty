import React from 'react';

const Eyeliner = (props) => {
        return(
        <div className="product-wrapper">
                <div className="lippie-wrapper">
                  <div>
           <img src={props.eyeliner.api_featured_image} alt="images"/></div>
              <div>
              <h6>{props.eyeliner.name}</h6> 
               <p> {props.eyeliner.product_type}</p>
               <p> {props.eyeliner.price}</p>
                </div>
                <button>Add to Cart</button>
                </div>
        </div>
        
        );
}
export default Eyeliner;