import React, { Component } from "react";
import MainCounter from "./MainCounter";

class Hovercounter extends Component {
  render() {
    const { count, incrementCount } = this.props;

    return (
      <div>
        <h2 onMouseOver={incrementCount}>Hovered {count} time</h2>
      </div>
    );
  }
}

export default MainCounter(Hovercounter,10);
