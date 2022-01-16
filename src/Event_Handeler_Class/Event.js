import React, { Component } from 'react'

export default class EventHandeler extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             changedvalue : ''
        }
    }
    



handleonchange=(e)=>{
    this.setState({
        changedvalue : e.target.value
    }, ()=>{
        console.log(this.state.changedvalue)
    } )
    
}

    render() {
        return (
            <div>
                  <input type="text" onChange={this.handleonchange} />
                  <p>{this.state.changedvalue}</p>
            </div>
        )
    }
}
