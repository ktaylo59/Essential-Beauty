import React from 'react';

const Foundation = (props) => {
        return(
        <div className="product-wrapper">
                <div className="lippie-wrapper">
                  <div>
           <img src={props.foundation.api_featured_image} alt="images"/></div>
              <div>
              <h6>{props.foundation.name}</h6> 
               <p> {props.foundation.product_type}</p>
               <p> {props.foundation.price}</p>
                </div>
                <button>Add to Cart</button>
                </div>
        </div>
        
        );
}
export default Foundation;