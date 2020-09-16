import React from 'react';

const Blush = (props) => {
        return(
        <div className="product-wrapper">
                <div className="lippie-wrapper">
                  <div>
           <img src={props.blush.api_featured_image} alt="images"/></div>
              <div>
              <h6>{props.blush.name}</h6> 
               <p> {props.blush.product_type}</p>
               <p> {props.blush.price}</p>
                </div>
                <button>Add to Cart</button>
                </div>
        </div>
        
        );
}
export default Blush;