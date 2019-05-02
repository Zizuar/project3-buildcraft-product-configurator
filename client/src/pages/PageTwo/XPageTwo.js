import React, { Component } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { ComponentOne, ComponentTwo } from '../../components/Component'

class PageTwo extends Component {
  state = {
    array: ['X', 'PageTwo', 'Array'],
    string: 'XPageTwoString',
  };

  componentDidMount() {
    API.getDocuments()
      .then((res) => { console.log(res.data) })
      .catch((err) => console.log(err));
  }

  render() {
    return (<div>
      <Link to={"/"}>
        <strong>Go to PageOne</strong>
      </Link>
      <ComponentOne array={this.state.array} string={this.state.string} />
      <ComponentTwo array={this.state.array} string={this.state.string} />
    </div>);
  }
}

export default PageTwo;
