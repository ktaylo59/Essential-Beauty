import React from 'react';

const Cosmetic = (props) => {
        return(
        <div>
           <img src={props.beauty.api_featured_image} alt="images"/>
                {props.beauty.name}
                {props.beauty.product_type}
                {props.beauty.price}
        </div>
        
        );
}
export default Cosmetic;