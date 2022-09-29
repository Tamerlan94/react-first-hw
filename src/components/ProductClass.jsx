import React from "react";

class ProductClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.name,
            description: props.description,
            message: '',
        }
        this.onChange = this.onChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    onChange(e) {
        var val = e.target.value;
        this.setState({ message: val });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.showAlert(this.state.message);
    }

    render() {
        return (
            <div>       
                <h3>Product class component:</h3>
                <p>name - {this.state.name}</p>
                <p>description - {this.state.description}</p>
                <p>count - {this.state.count}</p>
                <form action="" onSubmit={this.handleSubmit}>
                    <input type="text" onChange={this.onChange} value={this.state.message} />
                    <input type="submit" value="Отправить"/>
                </form>
            </div>
        )
    }
}

export default ProductClass;