import React, { Component } from 'react';
import './index.css';

export default class Footer extends Component {
  handleCheckAll = (e) => {
    this.props.checkAllTodo(e.target.checked);
  }
  handleAllDone = () => {
    this.props.clearAllDone();
  }
  render() {
    const {todos} = this.props;
    const doneCount = todos.reduce((pre, cur)=>  pre + (cur.done ? 1 : 0), 0);
    const total = todos.length;
    return (
      <div className="todo-footer">
        <label>
          <input type="checkbox" checked={doneCount === total && total > 0} onChange={this.handleCheckAll} />
        </label>
        <span>
					<span>已完成（{doneCount}）</span> / 全部（{total}）
				</span>
        <button onClick={this.handleAllDone} className="btn btn-danger">清除已完成任务</button>
      </div>
    )
  }
}