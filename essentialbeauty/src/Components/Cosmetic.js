import React from 'react';

const Cosmetic = (props) => {
        return(
        <div>{ props.beauty.name}
        {props.beauty.brand}
        {props.beauty.price}
        </div>
        
        );
}
export default Cosmetic;