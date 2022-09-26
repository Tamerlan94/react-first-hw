import React from "react";

class ProductClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            description: ''
        }
    }

    render() {
        return (
            <div>
                <h3>Product class component:</h3>
                <p>name - {this.props.name}</p>
                <p>description - {this.props.description}</p>
                <p>count - {this.props.count}</p>
            </div>
        )
    }
}

export default ProductClass;