import React from 'react';

const Lipstick = (props) => {
        return(
        <div className="lippie">
           <img src={props.lipstick.api_featured_image} alt="images"/>
              <>
              <h6>{props.lipstick.name}</h6> 
               <p> {props.lipstick.product_type}</p>
              <p>  {props.lipstick.price} </p>
                </>
        </div>
        
        );
}
export default Lipstick;