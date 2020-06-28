import React, { Component } from 'react';
class Clock extends Component { 

  constructor() { 
    super()
    this.state = {
      time: new Date(),
      date: new Date() 
    }
  }
  currentTime() { 
    this.setState({
      time:new Date()
    })
  }
  componentWillMount() {
    setInterval(()=>this.currentTime(),1000)
  }
  render() { 
    return (
      <div className="column">
        <h1 className="time">{this.state.time.toLocaleTimeString()}</h1>
        <br />
        <h1 className="Date">{this.state.date.toLocaleDateString()}</h1>
        <h1 className="front">MADE BY AYUSH</h1>
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    );
  }

}
export default Clock;