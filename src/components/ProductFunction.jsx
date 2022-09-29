import React, { useState } from "react";

function ProductFunction(props) {

    const [text, setText] = useState();

    return (
        <div>
            <h3>Product function component</h3>
            <p>name: {props.name}</p>
            <p>description: {props.description}</p>

            <input type="text" onChange={(e) => props.showAlert(e.target.value)} />

        </div>
    )
}

export default ProductFunction;