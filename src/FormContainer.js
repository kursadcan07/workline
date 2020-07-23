import React, {Component} from "react";
import FormComponent from "./FormComponent";

class FormContainer extends Component{

    constructor() {
        super();
        this.state={
            userName:"",
            passWord:"",
            isValid :false
        }
        this.handleChange= this.handleChange.bind(this);
    }

    handleChange(event) {
        const {name, value} = event.target;
            this.setState({
                [name] :value
            })
    }
    render() {
        return(
            <FormComponent
                handleChange = {this.handleChange}
                data ={this.state}
            />
        )
    }
}

export default FormContainer;
