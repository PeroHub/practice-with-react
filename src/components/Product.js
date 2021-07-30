import React from 'react'




function Product(props) {
    return (
        <div className="product">
            <h1>Name: {props.product.name}</h1>
            <h4>Price: ${props.product.price}</h4>
            <p>Des: {props.product.description}</p>
        </div>
    )
}



export default Product