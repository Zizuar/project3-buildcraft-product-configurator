
import React, { Component } from 'react';
import API from '../../utils/API';
import { Link } from 'react-router-dom';
import { ComponentOne, ComponentTwo } from '../../components/Component'

class Page extends Component {
  state = {
    array: ['X', 'Page', 'Array'],
    string: 'XPageString',
  };

  componentDidMount() {
    API.getDocuments()
      .then((res) => { console.log(res.data) })
      .catch((err) => console.log(err));
  }

  render() {
    return (<div>
      <Link to={"/PageTwo"}>
        <strong>Go to PageTwo</strong>
      </Link>
      <ComponentOne array={this.state.array} string={this.state.string} />
      <ComponentTwo array={this.state.array} string={this.state.string} />
    </div>);
  }
}

export default Page;
