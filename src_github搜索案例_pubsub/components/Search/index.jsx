import React, {Component} from 'react';
import axios from "axios";
import PubSub from 'pubsub-js';

class Search extends Component {
  search = () => {
    PubSub.publish('atguigu', {isFirst: false, isLoading: true});

  //  获取用户的输入   连续解构赋值+重命名
    const { keyWordElement: {value: keyWord} } = this;
    // this.props.updateAppState({
    //   isFirst: false,
    //   isLoading: true,
    // });
    //  发送网络请求
    axios.get(`https://api.github.com/search/users?q=${keyWord}`).then(
      response => {
        console.log(response)
        PubSub.publish('atguigu', {users: response.data.items, isLoading: false});
      },
      error => {
        console.log(error);
        PubSub.publish('atguigu', {err: error.response.data.message, isLoading: false});
      }
    )
  }

  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">搜索github用户</h3>
        <div>
          <input ref={c => this.keyWordElement = c} type="text" placeholder="输入关键字"/>&nbsp;
          <button onClick={this.search}>搜索</button>
        </div>
      </section>
    );
  }
}

export default Search;