import React, { Component } from "react";

class user extends Component {

  render() {

    return(
        <div>
            {this.props.name(false)}
        </div>
    );

  }
}

export default user;
