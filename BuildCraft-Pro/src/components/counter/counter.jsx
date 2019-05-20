import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: this.props.value
  };

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  handleDecrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  handleClear = () => {
    this.setState({ count: (this.state.count = 0) });
  };

  render() {
    return (
      <div className="row">
        <div className="col-1">
          {" "}
          <span
            style={{ fontSize: 11, fontWeight: "bold" }}
            className={this.getBadgeClasses()}
          >
            {this.formatCount()}
          </span>
        </div>

        <div className="col">
          <button
            onClick={this.handleIncrement}
            className={"btn btn-secondary btn-sm"}
          >
            +
          </button>
          <button
            onClick={this.handleDecrement}
            className={"btn btn-secondary btn-sm m-2"}
            // disabled={this.props.counter.value === 0 ? "disabled" : ""}
          >
            -
          </button>
          <button onClick={this.handleClear} className="btn btn-danger btn-sm">
            clear
          </button>
        </div>
      </div>
    );
  }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
