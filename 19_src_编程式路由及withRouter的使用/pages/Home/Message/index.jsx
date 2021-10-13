import React, {Component} from 'react';
import {Link, Route, Redirect} from 'react-router-dom';
import Detail from "./Detail";

class Message extends Component {

  state = {
    messageArr: [
      {id: '01', title: '消息1'},
      {id: '02', title: '消息2'},
      {id: '03', title: '消息3'}
    ]
  }

  replaceShow = (id, title) => {
    // replace跳转，携带params参数
    // this.props.history.replace(`/home/message/detail/${id}/${title}`);
    // replace跳转，携带search参数
    // this.props.history.replace(`/home/message/detail?id=${id}&title=${title}`);
    // replace跳转，携带state参数
    this.props.history.replace(`/home/message/detail`, {id, title});
  }

  pushShow = (id, title) => {
    // push跳转，携带params参数
    // this.props.history.push(`/home/message/detail/${id}/${title}`);
    // push跳转，携带search参数
    // this.props.history.push(`/home/message/detail?id=${id}&title=${title}`);
    // push跳转，携带state参数
    this.props.history.push(`/home/message/detail`, {id, title});
  }

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
    const { messageArr } = this.state;
    return (
      <div>
        <ul>
          {
            messageArr.map(msg => {
              return (
                <li key={msg.id}>
                  {/* 向路由组件传递params参数 */}
                  {/*<Link to={`/home/message/detail/${msg.id}/${msg.title}`}>{msg.title}</Link>*/}
                  {/* 向路由组件传递search参数 */}
                  {/*<Link to={`/home/message/detail/?id=${msg.id}&title=${msg.title}`}>{msg.title}</Link>*/}
                  {/* 向路由组件传递state参数 */}
                  <Link to={{pathname: '/home/message/detail', state: {id: msg.id, title: msg.title}}}>{msg.title}</Link>
                  &nbsp;<button onClick={() => this.pushShow(msg.id, msg.title)}>push查看</button>
                  &nbsp;<button onClick={() => this.replaceShow(msg.id, msg.title)}>replace查看</button>
                </li>
              )
            })
          }
        </ul>
        <hr />
        {/* 声明接收params参数 */}
        {/*<Route path="/home/message/detail/:id/:title" component={Detail}></Route>*/}
        {/* search参数无需声明接收 */}
        {/*<Route path="/home/message/detail" component={Detail}></Route>*/}
        {/* state参数无需声明接收 */}
        <Route path="/home/message/detail" component={Detail}></Route>
        {/*<Redirect to="/home/message/detail/01/消息1"></Redirect>*/}
        <hr />
        <button onClick={this.back}>回退</button> &nbsp;
        <button onClick={this.forward}>前进</button> &nbsp;
        <button onClick={this.go}>GO</button>
      </div>
    );
  }
}

export default Message;