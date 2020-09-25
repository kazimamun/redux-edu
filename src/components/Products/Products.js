import React from 'react';

const Products = (props) => {
    const {name, id} = props.product;
    return (
        <div style={{border:'1px solid lightblue'}}>
            <p>Name: {name}</p>
            <button onClick={()=>props.addToCart(id, name)}>add to cart</button>
        </div>
    );
};

export default Products;