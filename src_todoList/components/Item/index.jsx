import React, { Component } from 'react';
import './index.css';

export default class Item extends Component {
  state = {
    mouse: false
  }
  handleCheck = (id) => {
    return (e) => {
      console.log(id, e.target.checked)
      this.props.updateTodo(id, e.target.checked);
    }
  }
  handleMouse = (flag) => {
    return () => {
      this.setState({mouse: flag});
    }
  }
  handleDelete = (id) => {
    console.log('id- ',id)
    if (window.confirm('确定删除吗')) {
      this.props.deleteTodo(id);
    }
  }
  render() {
    const { id, name, done} = this.props;
    const { mouse } = this.state;

    return (
      <li onMouseEnter={this.handleMouse(true)}
          onMouseLeave={this.handleMouse(false)}
          style={{background: mouse ? '#ddd' : '#fff'}}>
        <label>
          <input type="checkbox" checked={done}
                  onChange={this.handleCheck(id)}/>
          <span>{name}</span>
        </label>
        <button onClick={()=>this.handleDelete(id)} className="btn btn-danger" style={{display: mouse ? 'block' : 'none'}}>删除</button>
      </li>
    )
  }
}