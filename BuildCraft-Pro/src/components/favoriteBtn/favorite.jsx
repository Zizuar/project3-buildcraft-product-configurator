import React, { Component } from "react";

class Favorite extends Component {
  render() {
    let classes = "fa fa-heart";
    if (!this.props.favorite) classes += "-o";
    return <i className={classes} aria-hidden="true" />;
  }
}

export default Favorite;
