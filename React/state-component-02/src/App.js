import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.css';

//stateless
const Btn = ({caption,handler}) => (
  <button className = "btn btn-primary" onClick = {handler}>
    {caption}
  </button>
)


//statefull
class App extends Component {
  state = {
    num:0
  }
  
//   increament = () => {
// this.setState({num: this.state.num + 1})  }

//   decreament = () => {
// this.setState({num: this.state.num - 1})  }


//pass 1 to incr or -1 to decr
incOrDec = (val) => {
  this.setState({num: this.state.num + val})
}

  render() {
    return(
      
      <div className="container">
        <h1 className="alert alert-info">React JS counter Application</h1>
        <hr />
        <h3>Value of Counter: {this.state.num}</h3>
        <hr />
        {/* <button className="btn btn-primary" onClick={() => this.incOrDec(1)}> Inc </button>
        <button className="btn btn-primary" onClick={() => this.incOrDec(-1)}> Dec </button> */}
     
        <Btn caption="Increment" handler={() => this.incOrDec(1)}></Btn>
        <Btn caption="Decrement" handler={() => this.incOrDec(-1)}></Btn>
     
      </div>

    )
  }
}

export default App;