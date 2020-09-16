import React from 'react';

const Eyeshadow = (props) => {
        return(
        <div className="product-wrapper">
                <div className="lippie-wrapper">
                  <div>
           <img src={props.eyeshadow.api_featured_image} alt="images"/></div>
              <div>
              <h6>{props.eyeshadow.name}</h6> 
               <p> {props.eyeshadow.product_type}</p>
               <p> {props.eyeshadow.price}</p>
                </div>
                <button>Add to Cart</button>
                </div>
        </div>
        
        );
}
export default Eyeshadow;