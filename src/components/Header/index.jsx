import React, { Component } from 'react';
import './index.css';

export default class Header extends Component {
  handleKeyUp = (e) => {
    const {target, keyCode} = e;
    if (keyCode !== 13) return;
    console.log(target.value, keyCode)

  }

  render() {
    return (
      <div className="todo-header">
        <input type="text" onKeyUp={this.handleKeyUp} placeholder="请输入你的任务名称，按回车键确认"/>
      </div>
    )
  }
}