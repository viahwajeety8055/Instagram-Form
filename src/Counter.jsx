import React, { Component } from 'react'

export default class Counter extends Component {
    constructor(){
        super()

        this.state = {
            count : 0
        }
    }

    handleCounter = () => {
        let con = this.state.count;
        this.setState({count : con + 1});
    }
  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.handleCounter}>Click</button>
      </div>
    )
  }
}
