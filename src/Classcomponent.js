import React, {Component} from 'react'

class Classcomponent extends Component {
    constructor(props){
        super(props);

        this.handleChange = this.handleChange.bind.this;
        this.handleSubmit = this.handleSubmit.bind.this;
    }

    handleSubmit(){
        console.log("Submitted")
    }

    handleChange(value,key){
        console.log(value);
    }

    render() {
        return (
            <>
                <input
                    type="text"
                    name="Username"
                    placeholder="Enter Username"
                    onChange={(data) => this.handleChange(data.target.value,"username")}
                />
                <input
                    type="password"
                    name="Password"
                    placeholder="Enter Password"
                    onChange={(data) => this.handleChange(data.target.value,"password")}
                />
                <button onClick={this.handleSubmit}>Submit</button>
            </>
        )
    }
}


export default Classcomponent