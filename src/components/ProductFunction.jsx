import React from "react";

function ProductFunction(props){
    return(
        <div>
            <h3>Product function component</h3>
            <p>name: {props.name}</p>
            <p>description: {props.description}</p>
        </div>
    )
}

export default ProductFunction;