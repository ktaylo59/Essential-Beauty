import React from 'react';

const Lipstick = (props) => {
        return(
        <div className="product-wrapper">
                <div className="lippie-wrapper">
                  <div>
           <img src={props.lipstick.api_featured_image} alt="images"/></div>
              <div>
              <h6>{props.lipstick.name}</h6> 
               <p> {props.lipstick.product_type}</p>
               <p> {props.lipstick.price}</p>
                </div>
                <button>Add to Cart</button>
                </div>
        </div>
        
        );
}
export default Lipstick;