import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';

class Header extends Component {
  back = () => {
    this.props.history.goBack();
  }

  forward = () => {
    this.props.history.goForward();
  }

  go = () => {
    this.props.history.go(1);
  }

  render() {
    return (
      <div className="page-header">
        <h2>React Router Demo</h2>
        <button onClick={this.back}>ει</button> &nbsp;
        <button onClick={this.forward}>εθΏ</button> &nbsp;
        <button onClick={this.go}>GO</button>
      </div>
    );
  }
}

export default withRouter(Header);