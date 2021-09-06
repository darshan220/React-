import React, { Component } from "react";
import Hovercounter from "./Hovercounter";
import MainCounter from "./MainCounter";

class higherOrdered extends Component {
  render() {
    const { count, incrementCount } = this.props;
    return (
      <div>
        {/* <h1>{this.state.count}</h1> */}
        <button onClick={incrementCount}>{this.props.name} {this.props.id}Increment {count} times</button>
        <Hovercounter />
      </div>
    );
  }
}

export default MainCounter(higherOrdered,5);
