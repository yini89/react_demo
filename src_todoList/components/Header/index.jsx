import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {nanoid} from "nanoid";
import './index.css';

export default class Header extends Component {
  static propTypes = {
    addTodo: PropTypes.func.isRequired
  }
  handleKeyUp = (e) => {
    const {target, keyCode} = e;
    if (keyCode !== 13) return;
    if (target.value.trim() === '') {
      alert('不能为空');
      return;
    }
    console.log(target.value, keyCode)
    const addTodo = {
      id: nanoid(),
      name: target.value,
      done: false
    };
    this.props.addTodo(addTodo);
    target.value = '';
  }

  render() {
    return (
      <div className="todo-header">
        <input type="text" onKeyUp={this.handleKeyUp} placeholder="请输入你的任务名称，按回车键确认"/>
      </div>
    )
  }
}