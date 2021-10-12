import React, {Component} from 'react';
import PubSub from 'pubsub-js';
import './index.css';

class List extends Component {
  state = {
    users: [],
    isFirst: true, // 是否为第一次打开页面
    isLoading: false, // 是否处于加载中
    err: '' // 存储请求相关的错误信息
  }

  componentDidMount() {
    this.token = PubSub.subscribe('atguigu', (_, stateObj) => {
      console.log('data- ',stateObj)
      this.setState({...stateObj});
    })
  }

  componentWillUnmount() {
    PubSub.unsubscribe(this.token);
  }

  render() {
    let {isFirst, isLoading, err, users} = this.state;
    return (
      <div className="row">
        {
          isFirst ? <h2>欢迎使用，输入关键字，随后点击搜索</h2> :
            isLoading ? <h2>Loading......</h2> :
              err ? <h2>{err}</h2> :
          users.map(user => {
            return (
              <div className="card" key={user.id}>
                <a href={user.html_url} target="_blank" rel="noreferrer">
                  <img alt="avatar" src={user.avatar_url} style={{width: '100px'}}/>
                </a>
                <p className="card-text">{user.login}</p>
              </div>
            )
          })
        }
      </div>
    );
  }
}

export default List;